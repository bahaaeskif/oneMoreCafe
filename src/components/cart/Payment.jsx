

function Payment({ darkMode }) {
    return (
        <div className={`${darkMode ? 'bg-tertiaryDark' : 'bg-[#f5f5f9]'}
        p-8 shadow-xl rounded-xl flex-1
        `}>
            <div className={`${darkMode ? 'border-borderDark' : 'border-borderLight'} pb-6 border-b-2 border-solid`}>
                <div className={`${darkMode ? 'text-textDark' : 'text-textLight'} font-body text-xl mb-3`}>
                    الدفع
                </div>
                <div className={`${darkMode ? ' bg-secondaryDark text-subTextDark' : 'bg-white text-subTextLight'} py-3 px-4 rounded-xl flex items-center`}>
                    <div>
                        <i className={`bx bx-money text-4xl`}></i>
                    </div>
                    <div className={`${darkMode ? 'text-textDark' : 'text-textLight'} font-body mr-8 text-sm`}>
                        كاش
                    </div>
                </div>
            </div>
            <div>
                <div className={`${darkMode ? 'text-textDark' : 'text-textLight'} font-body text-xl mb-3 mt-3`}>
                    التوصيل
                </div>
                <form className={`${darkMode ? ' bg-secondaryDark' : 'bg-white'} rounded-lg`}>
                    <div className="py-6 px-3 flex flex-col gap-3 outline-none focus-visible:outline-none font-body
                    ">
                        <input type="text" name="number" className={`p-2 outline-none focus-visible:outline-none rounded-md border-[1px] border-solid  text-sm
                        ${darkMode ? 'border-borderDark text-textDark bg-tertiaryDark' : 'border-borderLight'}
                        `} placeholder="رقم الهاتف" />

                        <input type="text" name="address" className={`p-2 outline-none focus-visible:outline-none rounded-md border-[1px] border-solid  text-sm
                        ${darkMode ? 'border-borderDark bg-tertiaryDark text-textDark' : 'border-borderLight'}
                        `} placeholder="العنوان" />

                        <input type="text" name="notes" className={`p-2 outline-none focus-visible:outline-none rounded-md border-[1px] border-solid  text-sm
                        ${darkMode ? 'border-borderDark text-textDark bg-tertiaryDark' : 'border-borderLight'}
                        `} placeholder="الملاحظة عامة" />

                    </div>
                </form>
            </div>
        </div >
    );
}

export default Payment;