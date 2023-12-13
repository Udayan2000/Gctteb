import { useEffect, useState } from 'react';

function ScrollTop() {
    const [scrollBtn, setScrollBtn] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    function scrollBy() {
        if (window.scrollY > 200) {
            setScrollBtn(true);
        }
        else {
            setScrollBtn(false);
        }
    }
    window.addEventListener("scroll", scrollBy);

    

    return (
        <>
            <div className='scrolltop_btn' style={{ display: `${scrollBtn ? "inline-block" : "none"}` }}>


                <button className='btn' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}>
                    <i className="fa-solid fa-angles-up"></i>
                </button>


            </div>
        </>
    )
}

export default ScrollTop