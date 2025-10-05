export default function Home(){

    return(
        <main className="flex justify-between items-center m-2 p-2  columns-3 gap-5 ">
            <table className="bg-[#ececec] rounded-2xl w-[45vw] h-[15vh]">
                <div className="bg-white p-2 m-2 w-[50vw] h-[3vw] rounded-2xl">
                    <h2 className="text-center text-gray-400">Hospital das clinicas</h2>
                </div>
            </table>
            <table className="flex justify-around items-center bg-gray-200 w-[65vw] h-[45vw] rounded-2xl ">
                <aside className=" p-2 m-3 columns-1 gap-1">
                    <div className="bg-white m-2  p-5 items-center w-[50vw] h-[25vw] rounded-2xl grip justify-around">
                        <h2 className="ml-50 rounded-2xl text-center w-[20vw] bg-gray-400 text-gray-100">Hospital das clinicas</h2>
                        <p className=" text-gray-400">Bem vindo, aqui vai está as informações sobre os funcionario do hospital das clinicas</p>
                        <img className="rounded-2xl w-100 ml-30 h-60 items-center" src="/HP.jpg" alt="" />
                    </div>
                </aside>
            </table>
            
        </main>
    )
}