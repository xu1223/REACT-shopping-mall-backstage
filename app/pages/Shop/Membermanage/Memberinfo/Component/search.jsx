import React, { Component } from 'react';
import { post, get } from '@/fetch/request';
import SearchComp2 from '@/components/SearchComp2';
import {
    Form,
} from 'antd';
import moment from 'moment';
@Form.create()
export default class Search extends Component {
    static defaultProps = {};
    state = {}
    constructor(props, context) {
        super(props, context);
        this.state = {
            allStorageList: []
        }
    }

    componentDidMount() {

    }

    getAllStorage = () => {
        get(api.getAllStorage).then((data) => {
            this.setState({
                allStorageList: data.resultData.data.list,
            });
        })
    }

    //点击查询 或者重置 执行这里
    handleFormData = (values) => {
        console.log(values)
      
        if (values.time_type) {
            values['date_start'] = moment(values.time_type[0]).format('YYYY-MM-DD') + ' 00:00:00'
            values['date_end'] = moment(values.time_type[1]).format('YYYY-MM-DD') + ' 23:59:59'
        }else{
            values['date_start'] = ''
            values['date_end'] = ''
        }
        values['time_type'] = '1'
        this.props.changeSearch({ ...values });
    }

    render() {
        const {
            dictData = {},
            selectdata = {}
        } = this.props;
        const SearchConf = [{
            type: 'input',
            labelConf: {
                name: "会员名称",
                key: "email"
            },
            span: 6,

        }, {
            labelConf: {
                name: '注册国家',
                key: 'register_country_id'
            },
            span: 6,
            data: selectdata.storagecountry || [],
        }, {
            labelConf: {
                name: '会员等级',
                key: 'customer_group_id'
            },
            span: 6,
            data: selectdata.storagegroup || [],
        }, {
            labelConf: {
                name: '客服',
                key: 'manager_id'
            },
            span: 6,
            data: selectdata.storagemanager || [],
        }, {
            labelConf: {
                name: '渠道来源',
                key: 'sources_channel_id'
            },
            span: 6,
            data: selectdata.storagecontrast || [],
        }, {
            labelConf: [{
                name: '注册时间',
                key: 'time_type'
            },
            ],
            span: 6,
            type: 'range',
        },



        ];

        return (
            <SearchComp2
                loading={this.props.loading}
                SearchConf={SearchConf}
                handleFormData={this.handleFormData}
            />
        )
    }
}