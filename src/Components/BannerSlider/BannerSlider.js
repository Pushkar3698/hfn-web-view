import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  height: "400px",
  width: "100%",
  objectFit: "cover",
};

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
];

const API_URL =
  "https://asia-east2-hfn-web.cloudfunctions.net/prod-feed/banners/getV2?status=true";

const BannerSlider = () => {
  const [banners, setbanners] = useState([]);

  const fetchBanners = async () => {
    const fetchData = await fetch(API_URL);
    const { banners } = await fetchData.json();

    const mappedBanners = banners.map((el, i) => {
      return {
        url: el.img_url,
      };
    });

    // setbanners(mappedBanners);
    console.log(mappedBanners);
    console.log(banners, "banners");
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <img src={slideImage.url} alt="" style={divStyle} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default BannerSlider;
