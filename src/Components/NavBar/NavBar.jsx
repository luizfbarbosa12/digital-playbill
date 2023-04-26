import React from "react";
import { GlassNavBar, Icons } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { goToSetlist, goToTranslation } from "../../Router/coordinator";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <>
        <GlassNavBar>
          <Icons
            location={location.pathname.includes("/setlist")}
            onClick={() => goToSetlist(navigate)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.83 3.21002C13.83 2.57002 13.38 1.91002 13.38 1.21002C13.38 0.878501 13.2483 0.560559 13.0139 0.326138C12.7795 0.091718 12.4615 -0.039978 12.13 -0.039978C11.7985 -0.039978 11.4805 0.091718 11.2461 0.326138C11.0117 0.560559 10.88 0.878501 10.88 1.21002V15.71C10.88 15.7763 10.8537 15.8399 10.8068 15.8868C10.7599 15.9337 10.6963 15.96 10.63 15.96H9.38C8.31914 15.96 7.30172 16.3815 6.55158 17.1316C5.80143 17.8817 5.38 18.8992 5.38 19.96C5.38 21.0209 5.80143 22.0383 6.55158 22.7885C7.30172 23.5386 8.31914 23.96 9.38 23.96C10.4321 23.9322 11.4334 23.5019 12.1776 22.7577C12.9219 22.0135 13.3522 21.0121 13.38 19.96V5.73002C13.3783 5.68349 13.3908 5.63755 13.4158 5.59826C13.4408 5.55898 13.4771 5.52821 13.52 5.51002C13.5583 5.48379 13.6036 5.46976 13.65 5.46976C13.6964 5.46976 13.7417 5.48379 13.78 5.51002C17.2 7.98002 16.21 10.51 15.08 13.51C14.69 14.51 15.01 15.16 15.68 15.42C16.35 15.68 17.01 15.42 17.41 14.42C18.57 11.4 20.31 6.87002 14.83 3.21002Z"
                fill="#E6E6E6"
              />
            </svg>
          </Icons>
          <Icons
            location={location.pathname.includes("/translation")}
            onClick={() => goToTranslation(navigate)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.92 11H15.5C15.3674 11 15.2402 11.0527 15.1464 11.1464C15.0527 11.2402 15 11.3674 15 11.5V11.91C15.0013 12.3153 14.9226 12.7169 14.7684 13.0917C14.6142 13.4666 14.3876 13.8073 14.1014 14.0944C13.8153 14.3814 13.4753 14.6092 13.101 14.7646C12.7266 14.92 12.3253 15 11.92 15H11.5C11.3674 15 11.2402 15.0527 11.1464 15.1464C11.0527 15.2402 11 15.3674 11 15.5V22.91C11 23.1974 11.1135 23.4731 11.3157 23.6772C11.518 23.8814 11.7927 23.9974 12.08 24H22.92C23.2073 23.9974 23.482 23.8814 23.6843 23.6772C23.8865 23.4731 24 23.1974 24 22.91V12.08C24 11.7936 23.8862 11.5189 23.6837 11.3163C23.4811 11.1138 23.2064 11 22.92 11ZM20.76 22.2C20.666 22.2415 20.5643 22.263 20.4616 22.2631C20.3588 22.2631 20.2571 22.2418 20.163 22.2004C20.0689 22.159 19.9845 22.0985 19.9151 22.0226C19.8457 21.9468 19.7929 21.8574 19.76 21.76L19.25 20.41C19.232 20.3634 19.2005 20.3233 19.1595 20.2948C19.1185 20.2662 19.0699 20.2506 19.02 20.25H15.94C15.8901 20.2506 15.8415 20.2662 15.8005 20.2948C15.7595 20.3233 15.728 20.3634 15.71 20.41L15.2 21.76C15.1699 21.858 15.12 21.9488 15.0534 22.0267C14.9868 22.1046 14.905 22.1681 14.8129 22.2132C14.7209 22.2583 14.6205 22.284 14.5181 22.2888C14.4157 22.2936 14.3134 22.2773 14.2176 22.241C14.1217 22.2047 14.0343 22.1492 13.9607 22.0778C13.8872 22.0064 13.829 21.9207 13.7899 21.8259C13.7508 21.7312 13.7315 21.6294 13.7332 21.5269C13.735 21.4244 13.7577 21.3234 13.8 21.23L16.33 14.48C16.4195 14.242 16.5794 14.037 16.7885 13.8923C16.9975 13.7475 17.2457 13.67 17.5 13.67C17.7543 13.67 18.0025 13.7475 18.2115 13.8923C18.4206 14.037 18.5805 14.242 18.67 14.48L21.2 21.23C21.2352 21.3225 21.2518 21.4211 21.2487 21.5201C21.2456 21.6191 21.223 21.7165 21.1821 21.8067C21.1412 21.8969 21.0828 21.978 21.0104 22.0455C20.9379 22.1131 20.8528 22.1656 20.76 22.2Z"
                fill="#E6E6E6"
              />
              <path
                d="M16.46 18.41C16.4408 18.4453 16.4307 18.4848 16.4307 18.525C16.4307 18.5652 16.4408 18.6047 16.46 18.64C16.4809 18.6741 16.5103 18.7023 16.5454 18.7216C16.5805 18.7408 16.62 18.7506 16.66 18.75H18.28C18.32 18.7506 18.3595 18.7408 18.3946 18.7216C18.4297 18.7023 18.4591 18.6741 18.48 18.64C18.4993 18.6047 18.5094 18.5652 18.5094 18.525C18.5094 18.4848 18.4993 18.4453 18.48 18.41L17.67 16.26C17.6508 16.2149 17.6188 16.1764 17.5779 16.1494C17.537 16.1224 17.489 16.108 17.44 16.108C17.391 16.108 17.3431 16.1224 17.3022 16.1494C17.2613 16.1764 17.2292 16.2149 17.21 16.26L16.46 18.41Z"
                fill="#E6E6E6"
              />
              <path
                d="M7.78002 5.61002C7.80016 5.57323 7.81071 5.53196 7.81071 5.49002C7.81071 5.44808 7.80016 5.40681 7.78002 5.37002C7.75716 5.33243 7.72477 5.30154 7.68615 5.28047C7.64752 5.2594 7.60401 5.24889 7.56002 5.25002H5.45002C5.40604 5.24889 5.36253 5.2594 5.3239 5.28047C5.28527 5.30154 5.25289 5.33243 5.23002 5.37002C5.20989 5.40681 5.19934 5.44808 5.19934 5.49002C5.19934 5.53196 5.20989 5.57323 5.23002 5.61002C5.52051 6.2056 5.88324 6.76313 6.31002 7.27002C6.33349 7.29747 6.36263 7.3195 6.39543 7.33461C6.42823 7.34972 6.46391 7.35754 6.50002 7.35754C6.53614 7.35754 6.57182 7.34972 6.60462 7.33461C6.63742 7.3195 6.66655 7.29747 6.69002 7.27002C7.12031 6.76367 7.48642 6.20612 7.78002 5.61002Z"
                fill="#E6E6E6"
              />
              <path
                d="M11.92 13C12.0627 13 12.2039 12.9717 12.3356 12.9168C12.4673 12.8619 12.5868 12.7815 12.6872 12.6801C12.7877 12.5788 12.867 12.4586 12.9207 12.3264C12.9744 12.1942 13.0013 12.0527 13 11.91V1.08C13 0.793566 12.8862 0.518864 12.6837 0.316325C12.4811 0.113785 12.2064 0 11.92 0H1.08C0.793566 0 0.518864 0.113785 0.316325 0.316325C0.113785 0.518864 9.66638e-10 0.793566 9.66637e-10 1.08L9.66638e-10 11.91C-1.20926e-05 12.1974 0.113453 12.4731 0.31571 12.6772C0.517967 12.8814 0.79265 12.9974 1.08 13H11.92ZM10.72 10.69C10.6798 10.8504 10.587 10.9926 10.4565 11.0941C10.326 11.1956 10.1653 11.2505 10 11.25C8.78098 10.9754 7.63729 10.436 6.65 9.67C6.60743 9.63592 6.55453 9.61735 6.5 9.61735C6.44547 9.61735 6.39257 9.63592 6.35 9.67C5.36323 10.4368 4.21934 10.9763 3 11.25C2.81336 11.2576 2.63059 11.1953 2.48746 11.0753C2.34433 10.9553 2.25114 10.7862 2.22613 10.6011C2.20111 10.416 2.24607 10.2282 2.35221 10.0745C2.45835 9.92075 2.61803 9.81218 2.8 9.77C3.64786 9.54366 4.44983 9.17144 5.17 8.67C5.19931 8.65202 5.22376 8.62711 5.2412 8.59747C5.25864 8.56783 5.26853 8.53436 5.27 8.5C5.29372 8.43544 5.29372 8.36456 5.27 8.3C4.52189 7.44844 3.93256 6.46961 3.53 5.41C3.51203 5.36341 3.48051 5.32327 3.43952 5.29475C3.39853 5.26624 3.34993 5.25065 3.3 5.25H2.53C2.33109 5.25 2.14032 5.17098 1.99967 5.03033C1.85902 4.88968 1.78 4.69891 1.78 4.5C1.78 4.30109 1.85902 4.11032 1.99967 3.96967C2.14032 3.82902 2.33109 3.75 2.53 3.75H5.53C5.5963 3.75 5.65989 3.72366 5.70678 3.67678C5.75366 3.62989 5.78 3.5663 5.78 3.5V2.5C5.78 2.30109 5.85902 2.11032 5.99967 1.96967C6.14032 1.82902 6.33109 1.75 6.53 1.75C6.72891 1.75 6.91968 1.82902 7.06033 1.96967C7.20098 2.11032 7.28 2.30109 7.28 2.5V3.5C7.28 3.5663 7.30634 3.62989 7.35322 3.67678C7.40011 3.72366 7.4637 3.75 7.53 3.75H10.53C10.7289 3.75 10.9197 3.82902 11.0603 3.96967C11.201 4.11032 11.28 4.30109 11.28 4.5C11.28 4.69891 11.201 4.88968 11.0603 5.03033C10.9197 5.17098 10.7289 5.25 10.53 5.25H9.7C9.65007 5.25065 9.60147 5.26624 9.56048 5.29475C9.51949 5.32327 9.48797 5.36341 9.47 5.41C9.08258 6.46596 8.51032 7.44455 7.78 8.3C7.75628 8.36456 7.75628 8.43544 7.78 8.5C7.78147 8.53436 7.79136 8.56783 7.8088 8.59747C7.82624 8.62711 7.85069 8.65202 7.88 8.67C8.60017 9.17144 9.40214 9.54366 10.25 9.77C10.4313 9.83389 10.5812 9.96497 10.6687 10.1362C10.7561 10.3074 10.7745 10.5056 10.72 10.69Z"
                fill="#E6E6E6"
              />
              <path
                d="M17.65 5.35001C17.7186 5.42038 17.8067 5.4685 17.903 5.48812C17.9993 5.50773 18.0993 5.49794 18.19 5.46001C18.2813 5.4225 18.3594 5.3588 18.4146 5.27694C18.4698 5.19508 18.4995 5.09872 18.5 5.00001V4.69001C18.4999 4.64655 18.5111 4.60382 18.5325 4.56601C18.5539 4.52821 18.5849 4.49665 18.6222 4.47444C18.6596 4.45223 18.7021 4.44014 18.7455 4.43936C18.789 4.43859 18.8319 4.44915 18.87 4.47001C19.5121 4.80957 20.0496 5.31755 20.4248 5.93945C20.8001 6.56134 20.9989 7.27367 21 8.00001C21 8.26522 21.1053 8.51958 21.2929 8.70711C21.4804 8.89465 21.7348 9.00001 22 9.00001C22.2652 9.00001 22.5195 8.89465 22.7071 8.70711C22.8946 8.51958 23 8.26522 23 8.00001C22.9978 6.7035 22.5757 5.44257 21.797 4.40601C21.0182 3.36945 19.9246 2.61303 18.68 2.25001C18.6272 2.23296 18.5813 2.19951 18.549 2.15454C18.5166 2.10956 18.4994 2.05542 18.5 2.00001V1.00001C18.5006 0.901293 18.4719 0.804616 18.4176 0.72216C18.3633 0.639705 18.2859 0.57516 18.195 0.536662C18.1041 0.498163 18.0038 0.487433 17.9068 0.505824C17.8098 0.524216 17.7205 0.570905 17.65 0.640008L15.65 2.64001C15.6031 2.68649 15.5659 2.74179 15.5405 2.80272C15.5151 2.86365 15.5021 2.929 15.5021 2.99501C15.5021 3.06101 15.5151 3.12637 15.5405 3.1873C15.5659 3.24823 15.6031 3.30353 15.65 3.35001L17.65 5.35001Z"
                fill="#E6E6E6"
              />
              <path
                d="M2 14C1.73478 14 1.48043 14.1054 1.29289 14.2929C1.10536 14.4804 1 14.7348 1 15C1.00216 16.2965 1.42422 17.5574 2.203 18.594C2.98177 19.6306 4.07535 20.387 5.32 20.75C5.37361 20.7656 5.42046 20.7987 5.45308 20.844C5.4857 20.8893 5.50222 20.9442 5.5 21V22C5.50049 22.0987 5.53019 22.1951 5.58536 22.2769C5.64053 22.3588 5.71869 22.4225 5.81 22.46C5.90066 22.4979 6.00063 22.5077 6.09693 22.4881C6.19323 22.4685 6.2814 22.4204 6.35 22.35L8.35 20.35C8.39686 20.3035 8.43406 20.2482 8.45945 20.1873C8.48483 20.1264 8.4979 20.061 8.4979 19.995C8.4979 19.929 8.48483 19.8636 8.45945 19.8027C8.43406 19.7418 8.39686 19.6865 8.35 19.64L6.35 17.64C6.2795 17.5709 6.19013 17.5242 6.09314 17.5058C5.99616 17.4874 5.89589 17.4982 5.80499 17.5367C5.7141 17.5752 5.63663 17.6397 5.58235 17.7222C5.52807 17.8046 5.49942 17.9013 5.5 18V18.31C5.50038 18.3525 5.48947 18.3943 5.46839 18.4312C5.4473 18.4681 5.4168 18.4988 5.38 18.52C5.342 18.5419 5.29888 18.5535 5.255 18.5535C5.21112 18.5535 5.168 18.5419 5.13 18.52C4.48942 18.1812 3.95289 17.6748 3.57774 17.0548C3.20259 16.4349 3.0029 15.7246 3 15C3 14.7348 2.89464 14.4804 2.70711 14.2929C2.51957 14.1054 2.26522 14 2 14Z"
                fill="#E6E6E6"
              />
            </svg>
          </Icons>
          <Icons>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0C17.7348 0 17.4804 0.105357 17.2929 0.292893C17.1054 0.48043 17 0.734784 17 1V16.13C16.9996 16.1712 16.9895 16.2118 16.9703 16.2483C16.9512 16.2848 16.9237 16.3162 16.89 16.34C16.8529 16.3593 16.8118 16.3693 16.77 16.3693C16.7282 16.3693 16.6871 16.3593 16.65 16.34C16.1292 16.1145 15.5675 15.9988 15 16C13.9391 16 12.9217 16.4214 12.1716 17.1716C11.4214 17.9217 11 18.9391 11 20C11 21.0609 11.4214 22.0783 12.1716 22.8284C12.9217 23.5786 13.9391 24 15 24C16.0521 23.9722 17.0534 23.5418 17.7976 22.7976C18.5418 22.0534 18.9722 21.0521 19 20V2.46C19.0011 2.42089 19.0113 2.38257 19.0299 2.34813C19.0485 2.31369 19.0749 2.2841 19.107 2.26172C19.1391 2.23935 19.176 2.22482 19.2147 2.21931C19.2534 2.2138 19.2929 2.21746 19.33 2.23C20.1103 2.5051 20.7861 3.0154 21.2643 3.69058C21.7425 4.36577 21.9995 5.17263 22 6C22.001 6.7271 21.8002 7.44021 21.42 8.06C21.3265 8.17133 21.2585 8.30169 21.2206 8.44201C21.1826 8.58233 21.1758 8.72924 21.2004 8.87249C21.225 9.01574 21.2806 9.15189 21.3633 9.27147C21.4459 9.39105 21.5536 9.49117 21.6789 9.56487C21.8042 9.63857 21.944 9.68407 22.0887 9.6982C22.2334 9.71233 22.3794 9.69475 22.5166 9.6467C22.6537 9.59864 22.7788 9.52125 22.883 9.41992C22.9872 9.3186 23.0681 9.19577 23.12 9.06C23.6897 8.14056 23.9942 7.08159 24 6C24 4.4087 23.3679 2.88258 22.2426 1.75736C21.1174 0.632141 19.5913 0 18 0Z"
                fill="#E6E6E6"
              />
              <path
                d="M1 4H12C12.2652 4 12.5196 3.89464 12.7071 3.70711C12.8946 3.51957 13 3.26522 13 3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3C0 3.26522 0.105357 3.51957 0.292893 3.70711C0.48043 3.89464 0.734784 4 1 4Z"
                fill="#E6E6E6"
              />
              <path
                d="M1 9H12C12.2652 9 12.5196 8.89464 12.7071 8.70711C12.8946 8.51957 13 8.26522 13 8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9Z"
                fill="#E6E6E6"
              />
              <path
                d="M13 13C13 12.7348 12.8946 12.4804 12.7071 12.2929C12.5196 12.1054 12.2652 12 12 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13Z"
                fill="#E6E6E6"
              />
            </svg>
          </Icons>
          <Icons>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.25 20.41L21.39 1.34998C21.3652 1.03242 21.2406 0.730842 21.0341 0.488369C20.8275 0.245896 20.5496 0.0749491 20.24 -2.29888e-05C19.9374 -0.0735219 19.6193 -0.0503492 19.3305 0.0662386C19.0418 0.182826 18.7968 0.386969 18.63 0.649977L15.11 6.23998C15.079 6.28386 15.0624 6.33626 15.0624 6.38998C15.0624 6.4437 15.079 6.4961 15.11 6.53998C15.4871 6.93525 15.7887 7.39617 16 7.89998C16.0153 7.9416 16.0424 7.97791 16.0778 8.00452C16.1133 8.03114 16.1557 8.04692 16.2 8.04998C16.2463 8.05586 16.2933 8.04868 16.3357 8.02924C16.3781 8.0098 16.4142 7.97888 16.44 7.93998L19.19 3.60998C19.2167 3.56455 19.2576 3.52916 19.3064 3.50928C19.3552 3.4894 19.4092 3.48613 19.46 3.49998C19.5107 3.51227 19.5562 3.54008 19.5903 3.57952C19.6243 3.61897 19.6452 3.66808 19.65 3.71998L21.27 20.39C21.2765 20.4257 21.2744 20.4624 21.264 20.4972C21.2536 20.5319 21.2351 20.5637 21.21 20.59C20.73 21.08 18.59 22 14.79 22C11.4 22 9.32 21.27 8.58 20.78C8.52658 20.7434 8.48943 20.6875 8.47637 20.6241C8.46331 20.5607 8.47537 20.4947 8.51 20.44L12.36 14.37C12.3819 14.3301 12.3934 14.2854 12.3934 14.24C12.3934 14.1945 12.3819 14.1498 12.36 14.11C12.336 14.0682 12.3008 14.0339 12.2584 14.011C12.216 13.988 12.1681 13.9773 12.12 13.98H11.78C11.36 13.9819 10.9421 13.9212 10.54 13.8C10.4877 13.787 10.4326 13.7907 10.3825 13.8104C10.3323 13.8301 10.2895 13.8649 10.26 13.91L6.41 20C6.30603 20.1609 6.2505 20.3484 6.25 20.54C6.25 22.95 10.66 24.04 14.75 24.04C18.84 24.04 23.25 22.95 23.25 20.54V20.41Z"
                fill="#E6E6E6"
              />
              <path
                d="M14.25 18.25C14.25 18.3163 14.2236 18.3799 14.1767 18.4268C14.1299 18.4737 14.0663 18.5 14 18.5H13.5C13.2347 18.5 12.9804 18.6054 12.7929 18.7929C12.6053 18.9804 12.5 19.2348 12.5 19.5C12.5 19.7652 12.6053 20.0196 12.7929 20.2071C12.9804 20.3946 13.2347 20.5 13.5 20.5H16.5C16.7652 20.5 17.0195 20.3946 17.2071 20.2071C17.3946 20.0196 17.5 19.7652 17.5 19.5C17.5 19.2348 17.3946 18.9804 17.2071 18.7929C17.0195 18.6054 16.7652 18.5 16.5 18.5C16.4337 18.5 16.3701 18.4737 16.3232 18.4268C16.2763 18.3799 16.25 18.3163 16.25 18.25V16.15C16.2473 16.1071 16.2572 16.0644 16.2785 16.027C16.2998 15.9897 16.3316 15.9595 16.37 15.94C16.4061 15.9179 16.4476 15.9062 16.49 15.9062C16.5323 15.9062 16.5738 15.9179 16.61 15.94C16.9127 16.0733 17.2524 16.0967 17.5706 16.0063C17.8888 15.9158 18.1653 15.7171 18.3526 15.4444C18.5399 15.1718 18.6262 14.8423 18.5965 14.5129C18.5668 14.1835 18.423 13.8747 18.19 13.64L15.87 11.3L14.78 10.21C14.7521 10.1812 14.7313 10.1464 14.7192 10.1082C14.7071 10.07 14.7039 10.0296 14.71 9.99C14.7252 9.82702 14.7252 9.66298 14.71 9.5C14.71 8.90666 14.534 8.32664 14.2044 7.83329C13.8747 7.33994 13.4062 6.95543 12.858 6.72836C12.3098 6.5013 11.7066 6.44189 11.1247 6.55765C10.5427 6.6734 10.0082 6.95912 9.58864 7.37868C9.16908 7.79824 8.88336 8.33279 8.76761 8.91473C8.65185 9.49667 8.71126 10.0999 8.93832 10.6481C9.16539 11.1962 9.5499 11.6648 10.0433 11.9944C10.5366 12.3241 11.1166 12.5 11.71 12.5C12.0498 12.5013 12.3875 12.4473 12.71 12.34C12.7529 12.324 12.7996 12.3211 12.8441 12.3318C12.8887 12.3425 12.929 12.3662 12.96 12.4L14.17 13.61C14.1932 13.6316 14.2115 13.658 14.2236 13.6873C14.2357 13.7167 14.2412 13.7483 14.24 13.78L14.25 18.25Z"
                fill="#E6E6E6"
              />
              <path
                d="M4.00001 11C4.12021 11.0009 4.23655 10.9576 4.32689 10.8783C4.41724 10.799 4.47529 10.6893 4.49001 10.57L4.55001 10.17C4.62824 9.63556 4.87678 9.14062 5.25871 8.75869C5.64063 8.37676 6.13558 8.12822 6.67001 8.04999L7.07001 7.99999C7.18551 7.97678 7.28942 7.91429 7.36407 7.82314C7.43872 7.73199 7.47951 7.61781 7.47951 7.49999C7.47951 7.38218 7.43872 7.26799 7.36407 7.17685C7.28942 7.0857 7.18551 7.02321 7.07001 6.99999H6.67001C6.12827 6.91915 5.62785 6.66331 5.24508 6.27152C4.86231 5.87972 4.61821 5.37347 4.55001 4.82999L4.49001 4.42999C4.49001 4.29738 4.43733 4.17021 4.34356 4.07644C4.24979 3.98267 4.12262 3.92999 3.99001 3.92999C3.8574 3.92999 3.73022 3.98267 3.63646 4.07644C3.54269 4.17021 3.49001 4.29738 3.49001 4.42999L3.43001 4.82999C3.36286 5.37059 3.12167 5.87466 2.74284 6.26612C2.36401 6.65758 1.86811 6.91516 1.33001 6.99999H0.930009C0.814504 7.02321 0.710598 7.0857 0.635948 7.17685C0.561298 7.26799 0.520508 7.38218 0.520508 7.49999C0.520508 7.61781 0.561298 7.73199 0.635948 7.82314C0.710598 7.91429 0.814504 7.97678 0.930009 7.99999L1.33001 8.04999C1.86444 8.12822 2.35938 8.37676 2.74131 8.75869C3.12324 9.14062 3.37178 9.63556 3.45001 10.17L3.51001 10.57C3.52472 10.6893 3.58278 10.799 3.67312 10.8783C3.76347 10.9576 3.87981 11.0009 4.00001 11Z"
                fill="#E6E6E6"
              />
              <path
                d="M9.18007 2.99995H9.44007C9.76537 3.04894 10.066 3.20215 10.2968 3.43656C10.5276 3.67097 10.6761 3.97393 10.7201 4.29995V4.56995C10.7433 4.68545 10.8058 4.78936 10.8969 4.86401C10.9881 4.93866 11.1023 4.97945 11.2201 4.97945C11.3379 4.97945 11.4521 4.93866 11.5432 4.86401C11.6344 4.78936 11.6969 4.68545 11.7201 4.56995V4.29995C11.767 3.96508 11.9243 3.65542 12.167 3.41997C12.4097 3.18452 12.7239 3.03672 13.0601 2.99995H13.3201C13.4394 2.98523 13.5491 2.92718 13.6284 2.83683C13.7077 2.74649 13.751 2.63015 13.7501 2.50995C13.7492 2.38919 13.7055 2.27266 13.6268 2.1811C13.548 2.08954 13.4393 2.02889 13.3201 2.00995H13.0601C12.7312 1.96152 12.4274 1.8059 12.196 1.56723C11.9646 1.32857 11.8184 1.02019 11.7801 0.689948V0.429948C11.7569 0.314442 11.6944 0.210537 11.6032 0.135887C11.5121 0.0612372 11.3979 0.0204468 11.2801 0.0204468C11.1623 0.0204468 11.0481 0.0612372 10.9569 0.135887C10.8658 0.210537 10.8033 0.314442 10.7801 0.429948V0.689948C10.7369 1.02731 10.5811 1.34021 10.3379 1.57796C10.0947 1.81572 9.77832 1.96441 9.44007 1.99995H9.18007C9.0608 2.01889 8.95212 2.07954 8.87338 2.1711C8.79464 2.26266 8.75094 2.37919 8.75007 2.49995C8.74667 2.62185 8.78885 2.74065 8.86837 2.83311C8.94789 2.92557 9.05903 2.98506 9.18007 2.99995Z"
                fill="#E6E6E6"
              />
            </svg>
          </Icons>
        </GlassNavBar>
    </>
  );
};

export default NavBar;
