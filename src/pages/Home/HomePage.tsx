import { BannerCarousel } from "@/components/Carousel/BannerCarousel";
import NewGameCarousel from "@/components/Carousel/NewGameCarousel";
import SuggestCarousel from "@/components/Carousel/SuggestCarousel";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/authStore";
import background from "@assets/background/1755836841_95.png";
import warnImg from "@assets/background/logo  18.png";
import ggPlayImg from "@assets/background/Ứng dụng Playfun (1).png";
import appStoreImg from "@assets/background/Ứng dụng Playfun.png";
import logoImg from "@assets/logo/logo-funtap.png";
import newGameImg1 from "@assets/newGamesImg/game.png";
import newGameImg2 from "@assets/newGamesImg/game1.png";
import newGameImg3 from "@assets/newGamesImg/game2.jpg";
import newGameImg4 from "@assets/newGamesImg/game3.jpg";
import newImg1 from "@assets/newImg/MOMO TẶNG 10K - CÙNG GAME THỦ CÀY RANK ĐUA TOP! (1).jpg";
import newImg2 from "@assets/newImg/MOMO TẶNG 10K - CÙNG GAME THỦ CÀY RANK ĐUA TOP!.jpg";
import newImg3 from "@assets/newImg/MOMO TẶNG BẠN CŨ 5K NẠP GAME!.jpg";
import gameImg1 from "@assets/recomendImg/game1.jpg";
import gameImg2 from "@assets/recomendImg/game2.png";
import gameImg3 from "@assets/recomendImg/game3.png";
import gameImg4 from "@assets/recomendImg/game4.png";
import gameImg5 from "@assets/recomendImg/game5.png";
import gameImg6 from "@assets/recomendImg/game6.png";
import bangHoiImg from "@assets/serviceNav/Bang-hoi.png";
import doiCodeImg from "@assets/serviceNav/Doi-code.png";
import gameH5Img from "@assets/serviceNav/Game-H5.png";
import hoTroImg from "@assets/serviceNav/Ho-tro.png";
import napGameImg from "@assets/serviceNav/Nap-game.png";
import nhanCodeImg from "@assets/serviceNav/Nhan-code.png";
import sukienImg from "@assets/serviceNav/Su-kien.png";
import { ChevronRight, SunMoon, Sword, Swords } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { footerNavItems } from "../../../public/mock-api/homeData";

interface ServiceItem {
  name: string;
  icon: string;
}

interface Game {
  name: string;
  image: string;
  releaseDate?: string;
  status?: string;
}

interface NewsItem {
  title: string;
  image: string;
  author: string;
  category: string;
  date: string;
  isEnded?: boolean;
}

interface CategoryItem {
  icon: any;
  name: string;
}

const services: ServiceItem[] = [
  { name: "Nhận code", icon: nhanCodeImg },
  { name: "Hỗ trợ", icon: hoTroImg },
  { name: "Nạp game", icon: napGameImg },
  { name: "Bang hội", icon: bangHoiImg },
  { name: "Sự kiện", icon: sukienImg },
  { name: "Game H5", icon: gameH5Img },
  { name: "Đổi code", icon: doiCodeImg },
];

const newGames: Game[] = [
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: newGameImg1,
    releaseDate: "09/11/2025",
  },
  {
    name: "Lữ Khách Đại Lục: Idle RPG",
    image: newGameImg2,
    releaseDate: "04/01/2025",
  },
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: newGameImg3,
    releaseDate: "04/10/2025",
  },
  {
    name: "Lữ Khách Đại Lục: Idle RPG",
    image: newGameImg4,
    releaseDate: "04/07/2024",
  },
];

const recommendedGames: Game[] = [
  {
    name: "Call Of Dragon: Chúa Tể Của Rồng",
    image: gameImg1,
  },
  {
    name: "Phàm Nhân Tu Tiên: Duyên Khởi",
    image: gameImg2,
  },
  {
    name: "Đấu Phá Mobile",
    image: gameImg3,
  },
  {
    name: "Đại Hiệp Tap Tap",
    image: gameImg4,
  },
  {
    name: "Call Of Dragon: Chúa Tể Của Rồng",
    image: gameImg5,
  },
  {
    name: "Phàm Nhân Tu Tiên: Duyên Khởi",
    image: gameImg6,
  },
];

const categories: CategoryItem[] = [
  {
    icon: <Swords />,
    name: "MMORPG",
  },
  {
    icon: <SunMoon />,
    name: "Tam Quốc",
  },
  {
    icon: <Sword />,
    name: "Kiếm Hiệp",
  },
  {
    icon: <Swords />,
    name: "MMORPG",
  },
  {
    icon: <SunMoon />,
    name: "Tam Quốc",
  },
  {
    icon: <Sword />,
    name: "Kiếm Hiệp",
  },
  {
    icon: <Swords />,
    name: "MMORPG",
  },
  {
    icon: <SunMoon />,
    name: "Tam Quốc",
  },
];

const newsItems: NewsItem[] = [
  {
    title: "MOMO TẶNG BẠN CŨ 5K NẠP GAME!",
    image: newImg1,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025, 17:05",
  },
  {
    title: "MOMO TẶNG BẠN CŨ 5K NẠP GAME!",
    image: newImg2,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025, 17:05",
  },
  {
    title: "MOMO TẶNG BẠN CŨ 5K NẠP GAME!",
    image: newImg3,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025 - 06/11/2025",
    isEnded: true,
  },
  {
    title: "MOMO TẶNG BẠN CŨ 5K NẠP GAME!",
    image: newImg1,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025, 17:05",
  },
  {
    title: "MOMO TẶNG BẠN CŨ 5K NẠP GAME!",
    image: newImg2,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025, 17:05",
  },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200 font-roboto text-gray-700 text-base font-normal">
      <Header
        isAuthenticated={isAuthenticated}
        user={user}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        navigate={navigate}
        logout={logout}
      />

      <main className="w-full flex flex-col justify-center items-center gap-0">
        <div className="w-full max-w-3xl">
          <BannerCarousel />
        </div>
        <div className="w-full max-w-3xl bg-white relative">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={background}
              alt="background"
              className="w-[728px] h-[939px] object-cover mt-2!"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mb-7!">
            <div className=" w-full max-w-[728px] absolute z-20 top-0 pt-15!">
              <div className="px-6! flex flex-col mb-7!">
                <h2
                  className="text-[#1f1f1f] mb-5!"
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Dịch vụ
                </h2>
                <div className="flex flex-row justify-between px-2!">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-12.5 h-12.5 flex items-center justify-center text-white text-lg">
                        <img src={service.icon} alt="service-img" />
                      </div>
                      <span
                        className="text-[#1f1f1f] font-roboto text-center"
                        style={{
                          fontSize: 13.5,
                          fontWeight: 400,
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pl-6! mb-14!">
                <h2
                  className="text-[#1f1f1f] mb-3.5!"
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Game mới
                </h2>
                <NewGameCarousel newGames={newGames} />
              </div>
              <div className="pl-6! flex flex-col">
                <div className="flex justify-between items-center px-6 mb-5">
                  <h2
                    className="text-[#1f1f1f] mb-5!"
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    Gợi ý cho bạn
                  </h2>
                  <button className="flex flex-row items-center gap-1">
                    <p
                      className="text-[#ee4623]"
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Tất cả
                    </p>
                    <ChevronRight color="#ee4623" strokeWidth={1} size={20} />
                  </button>
                </div>

                <SuggestCarousel recommendedGames={recommendedGames} />

                <div className="grid grid-cols-4 grid-rows-2 gap-3 rounded-lg pr-6!">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="bg-[#F3F3F3] text-[#1f1f1f] rounded-lg flex items-center justify-center py-2! px-4 gap-2.5 hover:text-[#EF4B2A] transition-colors"
                    >
                      <span className="text-[#1f1f1f]" style={{ fontSize: 20 }}>
                        {category.icon}
                      </span>
                      <span
                        className=""
                        style={{
                          fontSize: 14,
                          fontFamily: "Roboto, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl bg-white px-6!">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-0.5!">
              <h2
                className="text-[#1f1f1f]"
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Tin tức - Sự kiện
              </h2>
              <button className="flex flex-row items-center gap-1">
                <p
                  className="text-[#ee4623]"
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Xem tất cả
                </p>
                <ChevronRight color="#ee4623" strokeWidth={1} size={20} />
              </button>
            </div>

            <div className="flex flex-col px-6">
              {newsItems.map((news, index) => (
                <div
                  key={index}
                  className="flex py-3! gap-5 border-b! border-gray-200! last:border-b-0!"
                >
                  <img
                    src={news.image}
                    alt="img"
                    className="w-[235px] h-[135px] rounded-[8px] object-cover"
                  />
                  <div className="flex flex-col justify-start items-start gap-2 flex-1">
                    <h3
                      className="text-[#1f1f1f]"
                      style={{
                        fontSize: 15.75,
                        fontWeight: 400,
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs">
                        A
                      </div>
                      <h6
                        className="text-[#61616a]"
                        style={{
                          fontSize: 13.5,
                          fontWeight: 400,
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        {news.author}
                      </h6>
                    </div>
                    <p
                      className="text-gray-500"
                      style={{
                        fontSize: 13.5,
                        fontWeight: 400,
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      <span className="text-[#1d73f1] mr-1!">
                        {news.category}
                      </span>{" "}
                      | <span className="ml-1!">{news.date}</span>
                      {news.isEnded && (
                        <strong
                          className="text-[#515151]"
                          style={{
                            fontSize: 13.5,
                            fontFamily: "Roboto, sans-serif",
                            marginLeft: 8,
                          }}
                        >
                          Đã kết thúc
                        </strong>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-gray-100 w-full max-w-3xl flex flex-col justify-center items-center px-[15px]! pt-6! pb-4!">
          <div className="pt-8 pb-5 flex flex-col justify-center items-center text-center">
            <div className="flex flex-row items-center gap-3 mb-5!">
              <img src={logoImg} alt="logoImg" className="w-[118px] h-10" />
              <img src={warnImg} alt="warnImg" className="w-[137px] h-[70px]" />
            </div>

            <div className="flex flex-col items-center space-y-1 mb-3! gap-1.5">
              <p
                className="text-[#61616a]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Email: <strong>hotro@funtap.vn</strong> | Hotline:{" "}
                <strong>1900 636 452</strong>
              </p>
              <p
                className="text-[#61616a]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Funtap security: <strong>Infosec@funtap.vn</strong>
              </p>
              <p
                className="text-[#61616a]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Người chịu trách nhiệm nội dung:{" "}
                <strong>Ông Đào Quang Tuấn</strong>
              </p>
              <p
                className="text-[#61616a] max-w-[560px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng do Cục
                Phát Thanh, Truyền Hình và Thông tin Điện tử cấp ngày 25 tháng 4
                năm 2025
              </p>
              <p
                className="text-[#61616a] max-w-[450px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Giấy chứng nhận đăng ký cung cấp dịch vụ trò chơi điện tử trên
                mạng số 125/GCN-PTTH&TTĐT ngày 16 tháng 7 năm 2020
              </p>
            </div>

            <div className="mb-4!">
              <p
                className="text-[#1f1f1f] uppercase mb-2!"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Tải ứng dụng Playfun tại
              </p>
              <div className="flex gap-3 justify-center">
                <button className="cursor-pointer">
                  <img
                    src={ggPlayImg}
                    alt="ggPlayImg"
                    className="w-[126px] h-9"
                  />
                </button>
                <button className="cursor-pointer">
                  <img
                    src={appStoreImg}
                    alt="appStoreImg"
                    className="w-[126px] h-9"
                  />
                </button>
              </div>
            </div>

            <p
              className="text-[#8e8e93]"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Copyright © 2019 Funtap.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40">
        <div className="w-full max-w-3xl flex flex-row justify-center items-center bg-white border-t! border-[#dadada]! relative">
          <Navbar footerNavItems={footerNavItems} navigate={navigate} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
