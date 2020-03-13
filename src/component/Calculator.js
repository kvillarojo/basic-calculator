import React, {useEffect, useState} from 'react'
import {CButton} from "../common/cButtons";

export const Calculator = () => {
    const [total, setTotal] = useState('')
    const [val1, setVal1] = useState('')
    const [val2, setVal2] = useState('')
    const [operator, setOperator] = useState(null)

    const handleCLick = (val) => {
        if(operator){
            setVal2(val2 + val);
        }else{
            setVal1(val1 + val);
        }
        setTotal(total + val);
    }

    const onOperatorSet = (op) => {
        setTotal('');
        if(operator === null){
            setOperator(op);
        }else{
            onTotal()
            setVal1(String(Number(val2) + Number(val1)))
            setVal2('')
            setTotal('')
            console.log('va1: ' + val1 + ' val2: ' + val2)
        }
    }

    const onTotal = () => {
        let totalAmount = '';
        if(val2 !== ''){
            switch(operator){
                case '+':
                    totalAmount = Number(val1) + Number(val2);
                    break;
                case '-':
                    totalAmount = Number(val1) - Number(val2);
                    break;
                case '/':
                    totalAmount = Number(val1) / Number(val2);
                    break;
                case '*':
                    totalAmount = Number(val1) * Number(val2);
                    break;
                default:
                    totalAmount = Number(val1) % Number(val2);
            }
            setTotal(String(totalAmount));
        }
    }

    const onClear = () => {
        setVal2('');
        setVal1('');
        setTotal('');
        setOperator(null);
    }

    useEffect(() => {
        console.log(val1 + ' ' + operator + ' ' + val2);
    })

    return (
        <div>
            <div className="field">
                <div className="control">
                    <input className="input is-large is-disabled" disabled={true} type="text" placeholder="0" value={total}/>
                </div>
            </div>
            <div className="columns">
                <div className="column is-half">
                    <CButton value={'AC'} status={'danger'} btnClick={() => onClear()}/>
                </div>
                <div className="column">
                    <CButton value={'%'} btnClick={() => onOperatorSet('%')}/>
                </div>
                <div className="column">
                    <CButton value={'/'} btnClick={() => onOperatorSet('/')}/>
                </div>
            </div>
            <div className="columns">
                <div className="column ">
                    <CButton value={'7'} btnClick={() => handleCLick(7)}/>
                </div>
                <div className="column">
                    <CButton value={'8'} btnClick={() => handleCLick(8)}/>
                </div>
                <div className="column">
                    <CButton value={'9'} btnClick={() => handleCLick(9)}/>
                </div>
                <div className="column">
                    <CButton value={'*'} btnClick={() => onOperatorSet('*')}/>
                </div>
            </div>
            <div className="columns">
                <div className="column ">
                    <CButton value={'4'} btnClick={() => handleCLick(4)}/>
                </div>
                <div className="column">
                    <CButton value={'5'} btnClick={() => handleCLick(5)}/>
                </div>
                <div className="column">
                    <CButton value={'6'} btnClick={() => handleCLick(6)}/>
                </div>
                <div className="column">
                    <CButton value={'-'} btnClick={() => onOperatorSet('-')}/>
                </div>
            </div>
            <div className="columns">
                <div className="column ">
                    <CButton value={'1'} btnClick={() => handleCLick(1)}/>
                </div>
                <div className="column">
                    <CButton value={'2'}  btnClick={() => handleCLick(2)}/>
                </div>
                <div className="column">
                    <CButton value={'3'} btnClick={() => handleCLick(3)}/>
                </div>
                <div className="column">
                    <CButton value={'+'} btnClick={() => onOperatorSet('+')}/>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <CButton value={'0'}  btnClick={() => handleCLick(0)}/>
                </div>
                <div className="column">
                    <CButton value={'.'}  btnClick={() => handleCLick(".")}/>
                </div>
                <div className="column is-half">
                    <CButton value={'='} status={'success'} btnClick={() => onTotal()}/>
                </div>
            </div>
        </div>
    )
}
