import KaggomLogo from "../../../assets/KaggomLogo.svg"
import KakaoLoginImage from "../../../assets/Login&Onboard/kakao_login.png"
import GoogleLoginImage from "../../../assets/Login&Onboard/google_login.png"
// import axios from "axios"

// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

function KakaoGoogleLogin() {
    // const [readyLogin, setReadyLogin] = useState(false);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (readyLogin) {
    //         navigate('/chat');
    //     }
    // }, [readyLogin]);

    // const googleLoginApi = async () => {
    //     try {
    //         const response = await axios.get('https://fnddz5n9-3000.asse.devtunnels.ms/auth/google',);
    //         console.log("googleLoginApi response: ", response.data);
    //         localStorage.setItem('user', JSON.stringify(response.data));
    //         setReadyLogin(true);
    //     } catch (error) {
    //         console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
    //         return null;
    //     }
    // };
    const googleLoginApi = () => {
        // Google OAuth 인증 URL
        const googleAuthUrl = 'https://kaggom.store/auth/google';
        
        // 사용자를 Google 인증 페이지로 리다이렉트
        window.location.href = googleAuthUrl;
    };

    const testApi = async () => {
        // try {
        //     const response = await axios.post('https://kaggom.store/login',);
        //     console.log("testApi response: ", response.data);
        //     localStorage.setItem('user', JSON.stringify(response.data));
        //     setReadyLogin(true);
        // } catch (error) {
        //     console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
        //     return null;
        // }습
        alert("아직 구현하지 못했습니다. 구글로그인으로 진행해주세요.")
        return
    };

    return (
        <>
        <div className="relative w-full h-screen bg-[#5F88FE]">
            <img src={KaggomLogo} alt="첫페이지" className="absolute top-[244px] left-1/2 transform -translate-x-1/2 flex items-center" />
            <button onClick={testApi}
                className="absolute top-[430px] left-1/2 transform -translate-x-1/2 flex items-center">
                <img src={KakaoLoginImage} alt="카카오로그인" /> 
            </button>
            <button onClick={googleLoginApi}
                className="absolute top-[500px] left-1/2 transform -translate-x-1/2 flex items-center">
                <img src={GoogleLoginImage} alt="구글로그인" /> 
            </button>
        </div>
        </>
    );
}

export default KakaoGoogleLogin;