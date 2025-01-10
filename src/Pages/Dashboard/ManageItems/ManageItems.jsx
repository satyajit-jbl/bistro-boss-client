
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem= (item) =>{
        console.log(menu);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(item._id);
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if(res.data.deletedCount >0){
                    // refetch to update nthe ui
                    refetch();
                      Swal.fire({
                title: "Deleted!",
                text: `${item.name} has been deleted.`,
                icon: "success"
              });
                }
            
            }
          });
    }
    //  const handleDeleteItem = item => {
    //         Swal.fire({
    //             title: "Are you sure to delete?",
    //             text: "You won't be able to revert this!",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Yes, delete it!"
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 axiosSecure.delete(`/menu/${item._id}`)
    //                     .then(res => {
    //                         console.log(res.data);
    //                         if (res.data.deletedCount>0) {
    //                             refetch();
    //                             Swal.fire({
    //                                 title: "Deleted!",
    //                                 text: "Item has been deleted.",
    //                                 icon: "success"
    //                             });
    //                         }
    //                     })
    
    //             }
    //         });
    //     }
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                menu.map((item, index)=> <tr key={item._id}>
                                    <td>
                                        {index+1}
                                    </td>
                                     <td>
                                         <div className="flex items-center gap-3">
                                             <div className="avatar">
                                                 <div className="mask mask-squircle h-12 w-12">
                                                     <img
                                                         src={item.image}
                                                         alt="Avatar Tailwind CSS Component" />
                                                 </div>
                                             </div>
                                            
                                         </div>
                                     </td>
                                     <td>
                                         {item.name}
                                     </td>
                                     <td className=''>$ {item.price}</td>
                                     <td>
                                         <Link to={`/dashboard/updateItem/${item._id}`}>
                                         <button  className="btn btn-ghost btn-lg bg-orange-500"><FaEdit className='text-white'></FaEdit></button>
                                         </Link>
                                     </td>
                                     <td>
                                         <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg"><FaTrashAlt className='text-red-600'></FaTrashAlt></button>
                                     </td>
                                 </tr>)
                            }
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;