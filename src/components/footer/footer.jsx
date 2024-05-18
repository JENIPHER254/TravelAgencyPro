const Footer = () => {
  return (
    <div className="bg-primary ">
      <div className=" mt-12 justify-center items-center ">
        <span class="block text-md text-bold text-white sm:text-center dark:text-white p-8">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/jenipher-onyango-52b1681a3/"
            class="hover:underline"
          >
            {" "}
            Jenipher A. Onyango{" "}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};
export default Footer;
