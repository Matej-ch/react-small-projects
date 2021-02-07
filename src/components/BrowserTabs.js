import Tab from "./Tab";


const BrowserTabs = () => {

    return (
        <div className="tabs flex flex-col justify-center w-full h-screen items-center space-y-2 bg-red-300">
            <div className="bg-white">
                <nav className="flex flex-col sm:flex-row">
                    <Tab>
                        <button>Tab 1</button>
                    </Tab>
                    <Tab>
                        <button>Tab 2</button>
                    </Tab>
                    <Tab>
                        <button>Tab 3</button>
                    </Tab>
                </nav>
            </div>
        </div>
    )
}

export default BrowserTabs;