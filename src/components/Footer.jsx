import {RiFacebookFill, RiGoogleFill, RiInstagramFill, RiTwitterFill, RiVkFill} from "@remixicon/react";

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
                <div className="flex space-x-6 mb-2">
                    <a
                        href="https://vk.com/id309280876"
                        target="_blank"
                        rel="noopener noreffer"
                        aria-label="Visit our Facebook page">
                        <RiVkFill/>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreffer"
                        aria-label="Visit our Twitter page">
                        <RiTwitterFill/>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreffer"
                        aria-label="Visit our Istagram page">
                        <RiInstagramFill/>
                    </a>
                </div>
                <p className="text-sm">&copy; 2024 VastuSpaze. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer