import styles from './AllProduct.module.css'
import { useNavigate } from 'react-router-dom'

const list = [
    {
        ProductId: '1',
        ProductName: 'iPhone 11 64GB I Chính hãng VN/A',
        Picture: 'https://image.cellphones.com.vn/220x/media/catalog/product/i/p/iphone_11_white_4_.png',
        UnitPrice: '5000000',
        rate: '5',
    }
]

const AllProduct = () => {
    const nav = useNavigate()

    return (
        <div className={styles.AllProduct}>
            <div className={styles.Title}>
                DANH SÁCH SẢN PHẨM
            </div>
            <div className={styles.ListProduct}>
                {list.map((e) => {
                    return (
                        <div onClick={() => {
                            nav('/Detail', {
                                state: {
                                    ProductId: e.ProductId
                                }
                            })
                        }} key={e.ProductId} className={styles.ItemProduct}>
                            <img className={styles.Picture} src={e.Picture} />
                            <div className={styles.ProductName}>{e.ProductName}</div>
                            <div className={styles.UnitPrice}>{e.UnitPrice} đ</div>
                            <div className={styles.rate}>{e.rate} Sao</div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
export default AllProduct

