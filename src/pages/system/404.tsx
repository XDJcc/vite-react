import React from "react";


const page404: React.FC = () => {
    const handleBackPage = () => {
        window.history.back()
    }
    return (
        <>
            <div style={{
                display: 'flex',
                width: '100%',
                height: "100%",
                alignItems: 'center',
                justifyContent: "center"
            }} onClick={handleBackPage}>
                <p>
                    找不到当前界面...
                </p>
            </div>
        </>
    )
}
export default page404
