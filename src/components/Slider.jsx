import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { db } from "../firebase.config"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/bundle';
import { Pagination } from 'swiper/modules';

const Slider = () => {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDocs(q)
  
      let listings = []
  
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setListings(listings)
      setLoading(false)
    }

    fetchListings()
  }, [])

  return( 
    listings && (
      <>
        <p className="exploreheading">Recomended</p>
        <Swiper 
          sliderPerView={1}
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {listings.map(({data, id}) => (
            <SwiperSlide key={id} onClick={() => navigate(`/category/${data.type}/${id}`)} >
              <img src={data.imageUrls[0]} alt='house' className='swiperSlideDiv'/>
                <p className='swiperSlideText'>{data.name}</p>
                <p className='swiperSlidePrice'>
                  ${data.discountedPrice ?? data.regularPrice}{' '}
                  {data.type === 'rent' && '/ month'}
                </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  ) 
}

export default Slider