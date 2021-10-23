import React, { useState,useEffect } from 'react';
import { Button, DatePicker, InputItem, Picker, List } from 'antd-mobile';
import './index.css';

const MyChildren = props =>{
    return <div onClick={props.onClick} className='mychildren' >
        <div style={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
            <div className='dot' style={{background:props.extra=='请选择'||(!props.extra)?'#ccc':'rgb(236, 86, 72)'}}></div>
            {props.children}
        </div>
        <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
}

const Info = (props) => {
    const [data,setData] = useState({})
    const [sch, setSch] = useState([]);
 
    return (
        <div className="info">
            <div className="title">
                <MyChildren
                    extra={data.sc?.title?' ':''}
                >username：
                    <InputItem
                        onBlur={()=>setTimeout(()=>setSch([]),300)}
                        placeholder='username'
                        className="inp"
                    />
                </MyChildren>
            </div>
            <div className="title">
                <MyChildren
                    extra={data.sc?.title?' ':''}
                >username：
                    <InputItem
                        onBlur={()=>setTimeout(()=>setSch([]),300)}
                        placeholder='username'
                        className="inp"
                    />
                </MyChildren>
            </div>
            <div className="title">
                <MyChildren
                    extra={data.sc?.title?' ':''}
                >username：
                    <InputItem
                        onBlur={()=>setTimeout(()=>setSch([]),300)}
                        placeholder='username'
                        className="inp"
                    />
                </MyChildren>
            </div>
          
            
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: 50,
                }}
            >
                <Button
                    onClick={props.history.goBack}
                    style={{ width: '40%' }}
                    size="large"
                    inline
                >
                    Cancel
                </Button>
                <Button 
                    style={{ width: '40%' }} 
                    size="large" 
                    inline 
                    type="primary"
                    onClick={()=>{
                       props.history.replace('/user')
                     
                    }}
                >
                    Confirm
                </Button>
            </div>
        </div>
    );
};

export default Info;
