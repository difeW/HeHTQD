import { useNavigate } from 'react-router-dom'
import styles from './FeedbackManager.module.css'

const FeedbackManager = () => {
    const nav = useNavigate()
    return (
        < div className={styles.FeedbackManager} >
            <div className={styles.title}>
                QUẢN LÝ BÌNH LUẬN
            </div>
            <div className={styles.Container}>
                <div className={styles.Search}>
                    <input className={styles.inputSearch} placeholder="Nhập tên user để tìm kiếm bình luận" />
                </div>
                <div className={styles.ListComment}>
                    <div className={styles.ItemComment}>
                        <div className={styles.NameUser}>
                            <span className={styles.UserName}>{'NguyenDinhTrai'}</span>
                            <span className={styles.CountStar}>{'5 sao'}</span>
                            <div onClick={() => {
                                nav('/Detail', {
                                    state: {
                                        ProductId: '4'
                                    }
                                })
                            }} className={styles.LinkSP}>{'RedMi'}</div>
                        </div>
                        <div className={styles.CommentText}>
                            {'ffffffffffffffffffffff '}
                        </div>
                    </div>

                </div>
            </div>


        </div >
    )
}
export default FeedbackManager

