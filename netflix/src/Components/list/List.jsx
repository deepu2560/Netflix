import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.scss'

export const List = () => {
  return (
    <div className='list'>
        <span className='listTitle'> 
        Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined/>
            <div></div>
            <ArrowForwardIosOutlined/>
        </div>
    </div>
  )
}
