"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PageHeaderStyleWrapper from "./PageHeader.style";
import { FiSearch } from "react-icons/fi";
import { BiCalendar } from "react-icons/bi";
import Button from "@/components/commons/Button";

type PageHeaderProps = {
  currentPage?: string;
  pageTitle?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ currentPage, pageTitle }) => {
  return (
    <PageHeaderStyleWrapper>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
          <div>
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                <Link href="# ">
                  Home <span>.</span> {currentPage && currentPage}
                </Link>
                <img
                  className="heading_shape"
                  src={"/assets/steps.png"}
                  alt="bithu nft heading shape"
                />
              </div>
              <h2 className="breadcrumb_title text-uppercase">
                {pageTitle && pageTitle}
              </h2>
            </div>
          </div>

          <div>
            <div className="breadcrumb_form">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  id="Search"
                  name="search"
                  placeholder="Search by name, token, address"
                />
                <button>
                  <FiSearch />
                </button>
              </form>
              <Button $sm $variant="dark" href="/project-calendar">
                <BiCalendar />
                Calender
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
