import { useState } from "react";

function Navbaru() {

    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <>
            <div class="flex justify-start ...">
                <div className="bg-red-400">01</div>
                <div className="bg-red-500">02</div>
                <div className="bg-red-600">03</div>
                <div className="bg-red-700">04</div>
                <div className="bg-red-800">05</div>
            </div>
            <div class="flex justify-between ...">
                <div className="bg-green-400 w-96">
                    <div className="bg-yellow-400">
                        a
                    </div>
                </div>
                <div className="bg-green-500 w-96">02</div>
                <div className="bg-green-600 w-96">03</div>
            </div>



        </>
    )
}
export default Navbaru;