import React, { useState, useRef } from "react";
import "./additem.css";
import plus from "../../assets/item/ic_plus.svg";
import xicon from "../../assets/item/ic_X.svg";

export default function Additem() {
  const [imagePreview, setImagePreview] = useState<string | null>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleImageDelete = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form className="additem-container">
      <div className="additem-top">
        <div className="additem-title">상품 등록하기</div>
        <button className="additem-title-btn">등록</button>
      </div>
      <div className="additem-input-container">
        <span className="additem-write">상품 이미지</span>
        <div className="image-upload">
          <label htmlFor="file" className="btn-upload">
            <div className="btn-container">
              <img className="ic-plus" src={plus} alt="이미지 등록 아이콘" />
              <span>이미지 등록</span>
            </div>
          </label>
          <div>
            {imagePreview && (
              <>
                <img
                  src={imagePreview}
                  alt="선택된 이미지"
                  className="file-upload"
                />
                <button className="ic-X-background" onClick={handleImageDelete}>
                  <img className="ic-X" src={xicon} alt="이미지 삭제 아이콘" />
                </button>
              </>
            )}
          </div>
        </div>
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleImageChange}
          ref={fileInputRef}
          key={imagePreview}
        />
      </div>
      <div className="additem-input-container">
        <label htmlFor="additem_name" className="additem-write">
          상품명
        </label>
        <input type="text" className="additem-input" id="additem_name" />
      </div>
      <div className="additem-input-container">
        <label htmlFor="additem_intro" className="additem-write">
          상품 소개
        </label>
        <input type="text" className="additem-input" id="additem_intro" />
      </div>
      <div className="additem-input-container">
        <label htmlFor="additem_price" className="additem-write">
          판매가격
        </label>
        <input type="text" className="additem-input" id="additem_price" />
      </div>
      <div className="additem-input-container">
        <label htmlFor="additem_tag" className="additem-write">
          태그
        </label>
        <input type="text" className="additem-input" id="additem_tag" />
      </div>
    </form>
  );
}
