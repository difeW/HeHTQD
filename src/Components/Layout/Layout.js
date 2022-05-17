import styles from './Layout.module.css'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const history = useNavigate()

    return (
        <div>
            <div className={styles.Nav}>
                <div onClick={() => {
                    history('/')
                }} className={styles.BtnNav}>
                    TẤT CẢ SẢN PHẨM
                </div>
                <div onClick={() => {
                    history('/Feedback')
                }} className={styles.BtnNav}>
                    QUẢN LÝ COMMENT
                </div>
            </div>
            <Outlet />
        </div>
    )
}
export default Layout

