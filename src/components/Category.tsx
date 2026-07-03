import React from "react";
import { FaAppleAlt, FaLeaf } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { LuCookie } from "react-icons/lu";
import { MdBakeryDining } from "react-icons/md";

function Category() {
  return (
    <>
      <section>
        <h2>Shop By categpry</h2>
        <div>
          <button>
            <FaLeaf />
            Vegetables
          </button>
          <button>
            <FaAppleAlt /> Fruits
          </button>
          <button>
            <GiMilkCarton />
            Dairy
          </button>
          <button>
            <MdBakeryDining />
            Bakery
          </button>
          <button>
            <LuCookie /> Snacks
          </button>
        </div>
      </section>
    </>
  );
}

export default Category;
