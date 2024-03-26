import React from 'react'
import {ReactComponent as SaveIcon} from 'assets/svg/save.svg'
import './saveWrapper.scss';

const Save = ({saveMovie}) => (
    <SaveIcon onClick={(e)=>saveMovie(e)}/>
  )


export default Save