import React, { Component } from 'react';
import { ListContext } from '@/config/context';
import {
    Upload,
    Icon,
    Modal
} from 'antd';

import { getToken } from '@/util/index'
class uploadImg extends Component {
    static defaultProps = {};
    static contextType = ListContext;  //设置 上下文
    constructor(props, context) {
        super(props, context);
        this.state = {
            fileList: [],
        }
    }

    componentDidMount = () => {
        if (this.props.image) {
            this.setState({
                fileList: [{
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: this.props.image,
                }]
            })
        }

    }

    //获取上传图片值
    handlePreview = async file => {
        if (!file.url && !file.preview) {  //判断图片数据存在
            file.preview = await getBase64(file.originFileObj);
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };
    handleChange = ({ fileList }) => {  //获取上传图片数据

        this.setState({ fileList })
        let param = ''
        fileList.map((item) => {
            param = item.response.resultData
        })
        if (fileList.length == 0) {
            param = ''
        }
        this.props.uploadchange(param,this.props.index)
    }
    handleCancel = () => {
        this.setState({
            previewVisible: !this.state.previewVisible
        })
    }



    render() {
        const { accessToken } = getToken()
        const {
            previewImage = '',
            fileList,
            previewVisible
        } = this.state
        const header = {
            'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return <div>
            <Upload
                action={process.env['APP_HOST_URL_API_ADMIN'] + '/api/admin/template_image_upload'}
                listType="picture-card"
                headers={header}
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    }
}


export default uploadImg