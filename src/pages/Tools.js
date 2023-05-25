import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import styles from "./Tools.module.css";

export default function Tools() {
  return (
    <Layout>
      <div className="px-5 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10">
        {/* First top bar */}
        <div className={styles.tool_info_container}>
          <div className=" flex flex-col lg:flex-row justify-between lg:items-center mb-6">
            <div className="flex mb-4 lg:mb-0 items-center">
              <div className="">
                <h2 className="text-slate-100">
                  <b>Available Tools</b>
                </h2>
                <h2 className=" text-[#5bb0c0]">
                  <b>Bing.com</b>
                </h2>
              </div>
            </div>

            <div className="flex ">
              <form action="" className="mr-8 mt-3">
                <input
                  type="text"
                  placeholder="Example.com"
                  className="rounded-md border py-1 px-6 w-4/3 bg-transparent "
                />
              </form>
              <div>
                <CgProfile className="text-2xl mx-auto text-slate-100" />
                <Link className="text-slate-100" href="/profile">
                  {" "}
                  My profile
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* ends here */}
        {/* card start here */}
        <div className="grid  lg:grid-cols-3 sm:grid-cols-1 lg:py-5 px-2 lg:gap-9 text-sm">
          <div className="bg-[#141C1D] sm:mb-4 md:mb-0 mb-4 lg:mb-0 rounded-xl border border-[#3A4245] text-white text-center p-5">
            <h3 className="mb-4 text-base">
              <b>Subdomains from ASN Number</b>
            </h3>
            <h3 className="mb-6">
              Discover subdomains associated with an ASN number. Get
              comprehensive information on all subdomains, IP addresses, and
              more, to gain valuable insights into your target application.
            </h3>
            {/* button */}
            <div className="m-4">
              <button class="bg-transparent hover:bg-[#5bb0c0] py-1 px-6 border border-[#5bb0c0] hover:border-transparent rounded-xl">
                Start
              </button>
            </div>
          </div>
          {/* card ends here */}
          {/* card start here */}
          <div className="bg-[#141C1D] sm:mb-4 md:mb-0 mb-4 lg:mb-0 rounded-xl border border-[#3A4245] text-white text-center p-5">
            <h3 className="mb-4 text-base">
              <b>Subdomains from IP Ranges</b>
            </h3>
            <h3 className="mb-10">
              A tool that helps discover subdomains from IP ranges by performing
              DNS resolution and collecting all subdomains associated with the
              IPs in the specific range.
            </h3>
            {/* button */}
            <div className="m-4">
              <button class="bg-transparent hover:bg-[#5bb0c0] py-1 px-6 border border-[#5bb0c0] hover:border-transparent rounded-xl">
                Start
              </button>
            </div>
          </div>
          {/* Ends here */}
          {/* card start here */}
          <div className="bg-[#141C1D] sm:mb-4 md:mb-0 mb-4 lg:mb-0 rounded-xl border border-[#3A4245] text-white text-center p-5">
            <h3 className="mb-4 text-base">
              <b>403 Bypass</b>
            </h3>
            <h3 className="mb-10">
              Basic tool which provides a straightforward solution for bypassing
              403 restriction on endpoints, allowing users to access them with
              ease.
            </h3>
            {/* button */}
            <div className="m-4">
              <button class="bg-transparent hover:bg-[#5bb0c0] py-1 px-6 border border-[#5bb0c0] hover:border-transparent rounded-xl">
                Start
              </button>
            </div>
          </div>
          {/* Ends here */}
          {/* card start here */}
          <div className="bg-[#141C1D] sm:mb-4 md:mb-0 mb-4 lg:mb-0 rounded-xl border border-[#3A4245] text-white text-center p-5">
            <h3 className="mb-4 text-base">
              <b>Directory Bruteforce</b>
            </h3>
            <h3 className="">
              Discover hidden directories and file with a directory brute-force
              tool that expands your attack surface and reveal restricted
              resources and uncover potential vulnerabilities.
            </h3>
            {/* button */}
            <div className="m-4">
              <button class="bg-transparent hover:bg-[#5bb0c0] py-1 px-6 border border-[#5bb0c0] hover:border-transparent rounded-xl">
                Start
              </button>
            </div>
          </div>
          {/* card ends here */}
          {/* card start here */}
          <div className="bg-[#141C1D] sm:mb-4 md:mb-0 mb-4 lg:mb-0 rounded-xl border border-[#3A4245] text-white text-center p-5">
            <h3 className="mb-4 text-base">
              <b>Extract swagger.json endpoints</b>
            </h3>
            <h3 className="mb-9">
              This will allow you to easily extract endpoints from a
              swagger.json file, making it easier to identify potential
              vulnerabilities or attack surfaces in your API.
            </h3>
            {/* button */}
            <div className="m-4">
              <button class="bg-transparent hover:bg-[#5bb0c0] py-1 px-6 border border-[#5bb0c0] hover:border-transparent rounded-xl">
                Start
              </button>
            </div>
          </div>
          {/* Ends here */}
          {/* card start here */}
          <div className="bg-[#141C1D] sm:mb-4 md:mb-0 mb-4 lg:mb-0 rounded-xl border border-[#3A4245] text-white text-center p-5">
            <h3 className="mb-4 text-base">
              <b>Admin Panel Finder</b>
            </h3>
            <h3 className="mb-8">
              Discover hidden admin panels and login pages on the target domain
              with this easy-to-use tool for better reconnaissance and accessing
              potential vulnerable login panels.
            </h3>
            {/* button */}
            <div className="m-4">
              <button class="bg-transparent hover:bg-[#5bb0c0] py-1 px-6 border border-[#5bb0c0] hover:border-transparent rounded-xl">
                Start
              </button>
            </div>
          </div>
          {/* Ends here */}
          {/* card start here */}
          <div className="bg-[#141C1D] sm:mb-4 md:mb-0 mb-4 lg:mb-0 rounded-xl border border-[#3A4245] text-white text-center p-4">
            <h3 className="mb-4 text-base">
              <b>Subdomain Takeover</b>
            </h3>
            <h3 className="">
              Discover potential Subdomain takeover vulnerabilities on the
              target domain. It will scan for subdomains to find any DNS
              misconfigurations that could allow an attacker to take control of
              a subdomain and potentially compromise your entire domain.
            </h3>
            {/* button */}
            <div className="m-4">
              <button class="bg-transparent hover:bg-[#5bb0c0] py-1 px-6 border border-[#5bb0c0] hover:border-transparent rounded-xl">
                Start
              </button>
            </div>
          </div>
          {/* card ends here */}
          {/* card start here */}
          <div className="bg-[#141C1D] sm:mb-4 md:mb-0 mb-4 lg:mb-0 rounded-xl border border-[#3A4245] text-white text-center p-4">
            <h3 className="mb-4 text-base">
              <p>
                <b>Subdomains from SSL configurations</b>
              </p>
            </h3>
            <h3 className="mb-9">
              Discover subdomains by analysing SSL/TLS certificates and
              configurations for a target domain with this tool. Expand your
              attack surface and uncover potential vulnerabilities suitable for
              wild-scope targets.
            </h3>
            {/* button */}
            <div className="m-4">
              <button class="bg-transparent hover:bg-[#5bb0c0] py-1 px-6 border border-[#5bb0c0] hover:border-transparent rounded-xl">
                Start
              </button>
            </div>
          </div>
          {/* Ends here */}
          {/* card start here */}
          <div className="bg-[#141C1D] sm:mb-4 md:mb-0 mb-4 lg:mb-0 rounded-xl border border-[#3A4245] text-white text-center p-4">
            <h3 className="mb-4 text-base">
              <b>Interesting JSON files</b>
            </h3>
            <h3 className="">
              Discover potential Interesting JSON files that might contain
              sensitive information or configuration details. it can also be
              used to identify configuration files that may reveal details about
              the target's infrastructure or applicationstack.
            </h3>
            {/* button */}
            <div className="m-4">
              <button class="bg-transparent hover:bg-[#5bb0c0] py-1 px-6 border border-[#5bb0c0] hover:border-transparent rounded-xl">
                Start
              </button>
            </div>
          </div>
          {/* Ends here */}
        </div>
      </div>
    </Layout>
  );
}
