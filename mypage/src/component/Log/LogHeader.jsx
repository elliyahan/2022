import React from 'react';
import './../../css/log.css'

const LogHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <div className="log-diary-header">
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChild}</div>
    </div>
  );
};

export default LogHeader;