import Layout from "@/Components/Layout";
import styles from "./target_info.module.css";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function target_info() {
  return (
    <Layout>
      <div className="my-12 mx-auto items-center">
        <div className={styles.target_info_container}>
          <div className="flex flex-wrap items-center">
            <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
              <div className="bg-[#17291A] rounded-t-xl text-center text-white">
                <b>SITE INFO</b>
              </div>
              <div className="flex justify-between text-white p-1">
                <span className="px-3">URL</span>
                <span className="px-2">https://fireeye.com.443</span>
              </div>
              <div className="flex justify-between text-white p-1 ">
                <span className="px-3">Location</span>
                <span className="px-2">
                  https://trellix.com/en-us/index.html
                </span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3">Title</span>
                <span className="px-2">--</span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3">Web Server</span>
                <span className="px-2">Cloudflare</span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3">IP</span>
                <span className="px-2">162.159.246.125</span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3">Content Length</span>
                <span className="px-2">--</span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3 ">Status Code</span>
                <span className="px-2">301</span>
              </div>
            </div>
            <div className="bg-[#141C1D] rounded-xl border border-[#3A4245] mx-8  ">
              <div className="bg-[#17291A] text-center text-white rounded-t-xl">
                <b>Targeted GEOLOCATION</b>
              </div>
              <div className="flex justify-between text-white w-full">
                <span className="px-3">IP</span>
                <span className="px-2">31.12.79.35</span>
              </div>
              <div className="flex justify-between text-white ">
                <span className="md:px-3">Hostname</span>
                <span className="px-2">
                  edge-star-mini-shv-02-bom1.facebook.com
                </span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3">City</span>
                <span className="px-2">Mumbai</span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3">Region</span>
                <span className="px-2">Maharashtra</span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3">IP</span>
                <span className="px-2">162.159.246.125</span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3">Country</span>
                <span className="px-2">IN</span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3 ">Org</span>
                <span className="px-2">AS32934 Facebook In.</span>
              </div>
              <div className="flex justify-between text-white">
                <span className="px-3 ">Postal</span>
                <span className="px-2">400070</span>
              </div>
              <div className="flex justify-between text-white">
                <span className="px-3 ">Timezone</span>
                <span className="px-2">Asia/Kolkata</span>
              </div>
            </div>

          <div className="flex flex-wrap items-center mt-5">
            <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
              <div className="bg-[#17291A] rounded-t-xl text-center text-white">
                <b>SITE INFO</b>
              </div>
              <div className="flex justify-between text-white p-1">
                <span className="px-3">URL</span>
                <span className="px-2">https://fireeye.com.443</span>
              </div>
              <div className="flex justify-between text-white p-1 ">
                <span className="px-3">Location</span>
                <span className="px-2">
                  https://trellix.com/en-us/index.html
                </span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3">Title</span>
                <span className="px-2">--</span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3">Web Server</span>
                <span className="px-2">Cloudflare</span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3">IP</span>
                <span className="px-2">162.159.246.125</span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3">Content Length</span>
                <span className="px-2">--</span>
              </div>

              <div className="flex justify-between text-white p-1">
                <span className="px-3 ">Status Code</span>
                <span className="px-2">301</span>
              </div>
            </div>
            <div className="bg-[#141C1D] rounded-xl border border-[#3A4245] mx-8  ">
              <div className="bg-[#17291A] text-center text-white rounded-t-xl">
                <b>Targeted GEOLOCATION</b>
              </div>
              <div className="flex justify-between text-white w-full">
                <span className="px-3">IP</span>
                <span className="px-2">31.12.79.35</span>
              </div>
              <div className="flex justify-between text-white ">
                <span className="md:px-3">Hostname</span>
                <span className="px-2">
                  edge-star-mini-shv-02-bom1.facebook.com
                </span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3">City</span>
                <span className="px-2">Mumbai</span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3">Region</span>
                <span className="px-2">Maharashtra</span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3">IP</span>
                <span className="px-2">162.159.246.125</span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3">Country</span>
                <span className="px-2">IN</span>
              </div>

              <div className="flex justify-between text-white">
                <span className="px-3 ">Org</span>
                <span className="px-2">AS32934 Facebook In.</span>
              </div>
              <div className="flex justify-between text-white">
                <span className="px-3 ">Postal</span>
                <span className="px-2">400070</span>
              </div>
              <div className="flex justify-between text-white">
                <span className="px-3 ">Timezone</span>
                <span className="px-2">Asia/Kolkata</span>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>

    </Layout>
  );
}
