const Footer = () => {
    return (
        <>
        <div className="footerSection row-auto">
            <img className="w-screen" src="./src/assets/images/footer.png" alt="footer" />
        </div>
        <div className="belowContent">
        <div className="detailsSection mt-14 flex justify-center items-center">
                <hr style={{width : "83rem"}} />
        </div>
        <div className="flex justify-between mt-14 mb-10 px-28 max-sm:flex-col">
            <img src="./src/assets/images/Union.png" className="max-sm:mb-6 w-32 text-center justify-center" alt="logo" />
            <p className="text-textRegularLastColor">© 2024 Mira. All rights reserved.</p>
        </div>
        </div>
        </>

    )
};

export default Footer;