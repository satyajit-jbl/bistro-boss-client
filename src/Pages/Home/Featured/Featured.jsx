import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20"> 
            <SectionTitle
                subHeading={"Check it Out"}
                heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem officiis molestias asperiores pariatur adipisci laudantium temporibus nam odio nesciunt autem et reiciendis saepe, doloremque est eius sit non ratione? Voluptatem explicabo fugit, mollitia autem iste dolor quidem! Consectetur ex perspiciatis eos distinctio sequi a error harum nobis non, alias ducimus aspernatur recusandae sit odit fugiat, at quod itaque expedita quidem sunt quos praesentium quae nihil quo? Corporis, sunt laboriosam  </p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;