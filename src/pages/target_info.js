import Layout from "@/Components/Layout";
import styles from "./target_info.module.css";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function target_info() {
  return (
    <Layout>
      <div>
        {/* card container */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 lg:p-5 text-sm">
          {/* card*/}

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            {/* card title */}
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>SITE INFO</b>
            </div>

            {/* card content */}
            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>URL</span>
              <span>https://fireeye.com.443</span>
            </div>
            <div className="grid grid-cols-2 justify-between text-white m-2 ">
              <span>Location</span>
              <span>https://trellix.com/enus/index.html</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>Title</span>
              <span>--</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>Web Server</span>
              <span>Cloudflare</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>IP</span>
              <span>162.159.246.125</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>Content Length</span>
              <span>--</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>Status Code</span>
              <span>301</span>
            </div>
          </div>
          {/* card end here-1 */}

          {/* card */}
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            {/* card title */}
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>Targeted GEOLOCATION</b>
            </div>

            {/* card content */}
            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>IP</span>
              <span>31.12.79.35</span>
            </div>
            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>Hostname</span>
              <span>edgetarminishv.02bom1.facebook.com</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>City</span>
              <span>Mumbai</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>Region</span>
              <span>Maharashtra</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>IP</span>
              <span>162.159.246.125</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2 ">
              <span>Country</span>
              <span>IN</span>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>Org</span>
              <span>AS32934 Facebook In.</span>
            </div>
            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>Postal</span>
              <span>400070</span>
            </div>
            <div className="grid grid-cols-2 justify-between text-white m-2">
              <span>Timezone</span>
              <span>Asia/Kolkata</span>
            </div>
          </div>
          {/* card end here */}

          {/* card */}
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            {/* card title */}
            <div className="grid grid-cols-3 justify-around card_title bg-[#17291A] rounded-t-xl text-white p-1">
              <b>#</b>
              <b className="mx-6">Top Subdomain Found</b>
            </div>

            {/* card content */}
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>1</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>2</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>3</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>4</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>5</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>6</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>7</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>8</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>9</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>10</span>
              <span>ash_cas04.thefacebook.com</span>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            {/* card title */}
            <div className="grid grid-cols-3 justify-around card_title bg-[#17291A] rounded-t-xl text-white p-1">
              <b>#</b>
              <b className="mx-6">IP Blocks</b>
            </div>

            {/* card content */}
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>1</span>
              <span>102.132.100.0/24</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>2</span>
              <span>102.132.100.0/24</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>3</span>
              <span>102.132.100.0/24</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>4</span>
              <span>102.132.100.0/24</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>5</span>
              <span>102.132.100.0/24</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>6</span>
              <span>102.132.100.0/24</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>7</span>
              <span>102.132.100.0/24</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>8</span>
              <span>102.132.100.0/24</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>9</span>
              <span>102.132.100.0/24</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>10</span>
              <span>102.132.100.0/24</span>
            </div>
          </div>
          {/* Card end here */}

          {/* card */}
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            {/* card title */}
            <div className="bg-[#17291A] rounded-t-xl text-white text-center p-1">
              <b>WHO IS INFO</b>
            </div>

            {/* card content */}
            <div className="text-white mx-5 my-3">
              <div>
                <span>Domain Name: facebook.com</span>
              </div>
              <div>
                <span>Registrant Name: Domain Admin</span>
              </div>

              <div>
                <span>Resgistrant Organization: Meta Platforms, Inc.</span>
              </div>

              <div>
                <span>Registrant Email: doamin@fb.com</span>
              </div>

              <div>
                <span>ASN Number: AS32934</span>
              </div>

              <div>
                <span>Domain Age: 26Years 0Months</span>
              </div>
            </div>
          </div>
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            {/* card title */}
            <div className="grid grid-cols-3 justify-around card_title bg-[#17291A] rounded-t-xl text-white p-1">
              <b>#</b>
              <b className="mx-6">Name Servers</b>
            </div>

            {/* card content */}
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>1</span>
              <span>A.NS.FACEBOOK.COM</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>2</span>
              <span>B.NS.FACEBOOK.COM</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>3</span>
              <span>C.NS.FACEBOOK.COM</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>4</span>
              <span>D.NS.FACEBOOK.COM</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>5</span>
              <span>D.NS.FACEBOOK.COM</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>6</span>
              <span>A.NS.FACEBOOK.COM</span>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>7</span>
              <span>B.NS.FACEBOOK.COM</span>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <span>8</span>
              <span>C.NS.FACEBOOK.COM</span>
            </div>
          </div>
        </div>
        {/* card container */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 lg:p-5 text-sm">
          {/* card*/}

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            {/* card title */}
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>SITE INFO</b>
            </div>

            {/* card content */}
            <div className="text-center m-5 text-white">
              <span>CMS: WordPress</span>
            </div>
          </div>
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            {/* card title */}
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>Status of Robots.txt and Sitemap.xml</b>
            </div>

            {/* card content */}
            <div className="m-5 text-white">
              <div>https://facebook.com/robots.txt exists</div>
              <div>https://facebook.com/crossdomain.xml exists</div>
            </div>
          </div>
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            {/* card title */}
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>Common Exposed Ports</b>
            </div>

            {/* card content */}
            <div className="text-center m-5 text-white">
              <div>facebook.com:443</div>
              <div>facebook.com:80</div>
            </div>
          </div>
          {/* card end here-1 */}
        </div>
      </div>
    </Layout>
  );
}
