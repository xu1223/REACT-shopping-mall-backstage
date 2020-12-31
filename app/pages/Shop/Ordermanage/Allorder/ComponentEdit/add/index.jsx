import React, { Component } from 'react';
import api from '@/fetch/api';
import pageConfig from './Config';
import { post, get } from '@/fetch/request'
import { ModalComp } from '@/components/ModalComp2';
import SearchWrap from './search';
import DataOper from '@/advanced/dataOper2';
import { ListContext } from '@/config/context';
import Table from '@/components/TableComp';
import BatOperation from '@/components/BatOperation';
import CategoryComponent from '@/components/CategoryComp'
import {
    Row,
    Col,
    Button,
    Affix,
    message,
} from 'antd';
@DataOper(pageConfig)
export default class addshop extends Component {
    // static defaultProps = {};
    static contextType = ListContext;
    constructor(props, context) {
        super(props, context);
        this.state = {
            categroyList: [],
            stage: true,
            stageid: '',
            supdata: []
        }


        this.columns = [{
            title: '缩略图',
            dataIndex: 'img_m',
            width: 80,
            render: (text, record, index) => {
                return (
                    <a href={record.image}><img src={text} style={{ width: '60px' }} /></a>
                )
            }
        }, {
            title: '商品信息',
            dataIndex: 'sku',
            width: 150,
            render: (text, row, index) => {
                return (
                    <div>
                        {
                            row.spu ? <p>SPU:{row.spu}</p> : ''
                        }

                        <p>SKU:{row.sku}</p>
                        <p>COLOR:{row.color}</p>
                        <p>SIZE:{row.size}</p>
                    </div>
                )
            }
        }, {
            title: '商品名称',
            dataIndex: 'name',
            width: 200,
        },
        {
            title: '商品展示价格(USD)',
            dataIndex: 'show_price',
            width: 100,
            render: (text, record) => {
                let data = '';
                data = parseFloat(text).toFixed(2)
                return <span>{data}</span>
            },
        },
        {
            title: '商品销售价格(USD)',
            dataIndex: 'price',
            width: 100,
            render: (text, row, index) => {
                let data = '';
                data = parseFloat(text).toFixed(2)
                return <span>{data}</span>
            }
        },
        ];
    }
    beforeCallback = (value) => {
        const {
            selectedRows,
            shopdata
        } = this.props
        if (selectedRows.length == 0 || !selectedRows) {
            message.error('请至少选择一项')
            return false
        }
        let param = []

        selectedRows.map(item => {
            shopdata.map(v => {
                if (v.product_id == item.product_id) {
                    item['isshow'] = true
                }
            })

            if (!item['isshow']) {
                item['id'] = 0
                item['quantity'] = 1
                item['transactionprice'] = item['quantity'] * item['price']
                item['total_weight'] = item['quantity'] * item['weight']
                param.push(item)
            }
        })
        this.props.toggshop(param)
        this.props.toggleWin('addshop');
    }

    componentDidMount() {
        post(api.get_category_tree_list).then((res) => {
            if (res.resultId == 200) {
                res.resultData.forEach((item) => {
                    item["children"] = item.children;
                    item["cate_name"] = item.name;
                    item["review_status_num"] = item.parent_id;
                    if (item.children) {
                        item.children.forEach((i) => {
                            i["children"] = i.children ? i.children : [];
                            i["cate_name"] = i.name;
                            i["review_status_num"] = i.parent_id;
                            if (i.children) {
                                i.children.forEach((j) => {
                                    j["children"] = j.children ? j.children : [];
                                    j["cate_name"] = j.name;
                                    j["review_status_num"] = j.parent_id;
                                    // j.label = j.cate_name;
                                    // j.value = j.cate_id
                                });
                            }
                        });
                    }
                });
                this.setState({
                    categroyList: res.resultData,
                });
            }
        });
    }



    onCancel = () => {
        this.props.toggleWin('addshop');
    }
    handleClick = (e, cateStr) => {
        const {
            listParams,
            activeKey
        } = this.state;
        let param = {
            category_id: e.parent_cate || e.son_cate
        }
        this.props.changeSearch(param)

    }
    //清除分类
    clearCategory = () => {
        this.setState({
            categoryId: ''
        }, () => {
            this.props.changeSearch({
                categoryId: ''
            }, this.state.activeKey)
        })
    }

    render() {
        const {
            categroyList,
        } = this.state;
        const {
            dataS,
            addshop
        } = this.props
        const modalProp = {
            beforeCallback: this.beforeCallback,
            title: false,
            method: api.add_customer,
            visible: this.props.addshop,
            onCancel: this.onCancel,
            form: this.props.form,
            winType: 3,
        };
        const cateProps = {
            handleClick: this.handleClick,
            categroyList,
            clearCategory: this.clearCategory,
            type: 'dev',
            ref: ref => this.child = ref
        }
        let param = this.props.tableConfig

        if (param.dataSource) {
            param.dataSource.map(item => {
                item['selechange'] = 0
            })
        }

        const tableProps = {
            columns: this.columns,
            ...param,
        };


        return (
            <ModalComp {...modalProp}>
                <SearchWrap changeSearch={this.props.changeSearch}></SearchWrap>
                <Row style={{ padding: '20px' }}>
                    <Col span={6} style={{ marginRight: '10px' }}>
                        <Affix offsetTop={94}>
                            <CategoryComponent {...cateProps} />
                        </Affix>
                    </Col>
                    <Col span={17}>
                        <div className="content-table">
                            <Table {...tableProps} selectedRowKeys={this.state.listSelData} className="table-main-test" />
                        </div>
                    </Col>
                </Row>
            </ModalComp>
        )
    }
}