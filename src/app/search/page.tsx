"use client";

import Header from "../../component/layout/Header";
import Footer from "../../component/layout/Footer";
import SearchInput from "../../component/search/SearchInput";
import ProductCart from "../../component/shopping/ProductCart";
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";
import { useSearch } from "../../context/SearchContext";

export default function SearchHome() {
  const { user, setUser } = useUser();
  const { result } = useSearch();

  //  페이지 최초 렌더링 될 때, setUser로 이름 설정
  useEffect(() => {
    //  학번 + 이름 형태로 작성 (ex. 2025***** 내이름 )
      setUser({ 
        name: "202303194 김민재",
        age: 25,
        userId: "ashclothes01",
        email: "202303194@o.cnu.ac.kr",
        phoneNumber: "010-1234-5678",
     });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <Header title={`${user.name} 쇼핑`} />
        <SearchInput />
        <ProductCart items={result} />
      </div>
    </div>
  );
}
