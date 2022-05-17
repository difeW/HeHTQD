import styles from './ProductDetail.module.css'
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';

const product = {
    id: "626fc73b92862a00110004b6",
    ProductName: "REDMI 9i Sport(Metallic Blue, 64 GB)",
    UnitPrice: "8, 999",
    Picture: "https://rukminim2.flixcart.com/image/312/312/ku04o7k0/mobile/x/x/t/9i-sport-mzb0a10in-redmi-original-imag785rwf3q8sft.jpeg?q=70",
    MSRP: "9, 999",
    rate: "4.4",
    rating: "96, 735",
    review: "5, 460",
    url: "https://www.flipkart.com/redmi-9i-sport-metallic-blue-64-gb/p/itmeb95d0b4616cc?pid=MOBG6WQWQZZMGQCU&lid=LSTMOBG6WQWQZZMGQCUR9J4PR&marketplace=FLIPKART&q=mobile+phone&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_2_12_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_12_na_na_na&fm=organic&iid=0d361323-1fa5-4854-8252-bc984d39f7c7.MOBG6WQWQZZMGQCU.SEARCH&ppt=None&ppn=None&ssid=r5fa9mdq800000001651490492000&qH=37695f7554f510f0",
    Type: "Phone",
    CategoryName: "REDMI"
}

const ThongSo = [
    {
        id: '1',
        title: 'AAAAAAAAAAAAAAAA',
        value: 'VBBBBBBBBBBBBBBBBBB'
    },
    {
        id: '2',
        title: 'AAAAAAAAAAAAAAAA',
        value: 'VBBBBBBBBBBBBBBBBBB'
    },
    {
        id: '3',
        title: 'AAAAAAAAAAAAAAAA',
        value: 'VBBBBBBBBBBBBBBBBBB'
    }
]

const list = [
    {
        ProductId: '1',
        ProductName: 'iPhone 11 64GB I Chính hãng VN/A',
        Picture: 'https://image.cellphones.com.vn/220x/media/catalog/product/i/p/iphone_11_white_4_.png',
        UnitPrice: '5000000',
        rate: '5',
    }
]

const ProductDetail = () => {
    const { username, setUsername } = useContext(Context)
    const nav = useNavigate()
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const location = useLocation()
    return (
        <div>
            <div className={styles.title}>
                CHI TIẾT SẢN PHẨM {location.state.ProductId}
                <div className={styles.username} >
                    <input className={styles.inputUserName} onChange={(e) => {
                        setUsername(e.target.value)
                    }} value={username} placeholder={'chưa có tài khoản'} />
                </div>
            </div>
            <div className={styles.containner}>
                <div className={styles.containnerPicture}>
                    <div className={styles.containnerPicture1}>
                        <img className={styles.Picture} src={product.Picture} />
                    </div>
                </div>
                <div className={styles.containerInfo}>
                    <div className={styles.ProductName}>{product.ProductName}</div>
                    <div className={styles.UnitPrice}>{product.UnitPrice}, 000 đ</div>
                    <span className={styles.rate}>{product.rate} sao</span>
                    <span className={styles.rating}>({product.rating} đánh giá)</span>
                    <div className={styles.ThongSoKiThuat}>
                        <div className={styles.ThongSoKiThuatTT}>
                            THÔNG SỐ KĨ THUẬT
                        </div>
                        {ThongSo.map((e) => {
                            if (Number(e.id) % 2 === 1)
                                return (
                                    <div className={styles.ThongSoKiThuatRowLe} key={e.id}>
                                        <div className={styles.ItemTT}>
                                            {e.title}
                                        </div>
                                        <div className={styles.ItemValue}>
                                            {e.value}
                                        </div>
                                    </div>
                                )
                            else
                                return (
                                    <div className={styles.ThongSoKiThuatRowChan} key={e.id}>
                                        <div className={styles.ItemTT}>
                                            {e.title}
                                        </div>
                                        <div className={styles.ItemValue}>
                                            {e.value}
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.ProductSuggest}>
                <div style={{
                    fontSize: 18,
                    fontWeight: 700,
                }}>SẢN PHẨM GỢI Ý</div>
                <div className={styles.ListSP}>
                    {list.map((e) => {
                        return (
                            <div onClick={() => {
                                document.body.scrollTop = 0;
                                document.documentElement.scrollTop = 0;
                                nav('/Detail', {
                                    state: {
                                        ProductId: 2
                                    }
                                })
                            }} key={e.ProductId} className={styles.ItemProduct}>
                                <img className={styles.PictureS} src={e.Picture} />
                                <div className={styles.ProductName}>{e.ProductName}</div>
                                <div className={styles.UnitPrice}>{e.UnitPrice} đ</div>
                                <div className={styles.rate}>{e.rate} Sao</div>
                            </div>
                        )
                    })}


                </div>

            </div>
            <div className={styles.Feedback}>
                <div className={styles.ContainnerFeedback}>
                    <div className={styles.ContainnerFeedbackItem}>
                        <div className={styles.ratebig}>{product.rate} sao</div>
                        <div className={styles.ratingbig}>({product.rating} đánh giá)</div>
                    </div>
                    <div className={styles.ContainnerFeedbackItem}>
                        <div className={styles.itemStar}>
                            <div className={styles.StarName}>
                                1 Sao
                            </div>
                            <div className={styles.StarCover}>
                                <div className={styles.StarNamePercent}>
                                </div>
                            </div>
                            <div className={styles.StarNameView}>
                                20 đánh giá
                            </div>
                        </div>
                        <div className={styles.itemStar}>
                            <div className={styles.StarName}>
                                2 Sao
                            </div>
                            <div className={styles.StarCover}>
                                <div className={styles.StarNamePercent}>
                                </div>
                            </div>
                            <div className={styles.StarNameView}>
                                20 đánh giá
                            </div>
                        </div>
                        <div className={styles.itemStar}>
                            <div className={styles.StarName}>
                                3 Sao
                            </div>
                            <div className={styles.StarCover}>
                                <div className={styles.StarNamePercent}>
                                </div>
                            </div>
                            <div className={styles.StarNameView}>
                                20 đánh giá
                            </div>
                        </div>
                        <div className={styles.itemStar}>
                            <div className={styles.StarName}>
                                4 Sao
                            </div>
                            <div className={styles.StarCover}>
                                <div className={styles.StarNamePercent}>
                                </div>
                            </div>
                            <div className={styles.StarNameView}>
                                20 đánh giá
                            </div>
                        </div>
                        <div className={styles.itemStar}>
                            <div className={styles.StarName}>
                                5 Sao
                            </div>
                            <div className={styles.StarCover}>
                                <div className={styles.StarNamePercent}>
                                </div>
                            </div>
                            <div className={styles.StarNameView}>
                                200 đánh giá
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Comment}>
                    <div className={styles.Control}>
                        <div className={styles.TextComment}>
                            COMMENTS
                        </div>
                        <div onClick={() => {
                            setModal2(true)
                        }} className={styles.btnComment}>
                            Đánh giá
                        </div>
                    </div>

                    <div className={styles.ListComment}>
                        <div className={styles.ItemComment}>
                            <div className={styles.NameUser}>
                                <span className={styles.UserName}>{'NguyenDinhTrai'}</span>
                                <span className={styles.CountStar}>{'5 sao'}</span>
                            </div>
                            <div className={styles.CommentText}>
                                {'Trangs map bu loz trinh heo '}
                            </div>
                        </div>
                        <div onClick={() => { setModal(true) }} className={styles.btn}>
                            XEM TẤT CẢ
                        </div>
                    </div>
                </div>
            </div>
            {modal &&
                <div onClick={(e) => {
                    setModal(false)
                }} className={styles.Modal}>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }} className={styles.containnerModal}>
                        <div className={styles.Comment1}>
                            <div className={styles.Control}>
                                ALL COMMENTS
                            </div>
                            <div className={styles.ListComment}>
                                <div className={styles.ItemComment}>
                                    <div className={styles.NameUser}>
                                        <span className={styles.UserName}>{'NguyenDinhTrai'}</span>
                                        <span className={styles.CountStar}>{'5 sao'}</span>
                                    </div>
                                    <div className={styles.CommentText}>
                                        {'ddddddddddd'}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }

            {modal2 &&
                <div onClick={(e) => {
                    setModal2(false)
                }} className={styles.Modal}>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }} className={styles.containnerModal2}>
                        <div className={styles.Comment1}>
                            <div className={styles.Control}>
                                THÊM BÌNH LUẬN
                            </div>
                            <input className={styles.Input} placeholder='Số sao' />
                            <input className={styles.Input} placeholder='Bình luận' />
                            <div className={styles.GroupBtn}>
                                <div className={styles.btn2}>Xác nhận</div>
                                <div className={styles.btn2}>Hủy</div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div >
    )
}
export default ProductDetail

