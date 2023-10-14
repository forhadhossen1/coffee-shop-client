import Swal from "sweetalert2";

const Addcoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier =  form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}

        console.log(newCoffee);

        // send data to the server..
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire(
                'Good job!',
                'Coffee added successfuly ',
                'success'
              )
        })
    }

    return (
        <div className=" bg-[#F4F3F0] p-24">
            <h2 className="text-3xl text-center font-medium">Add New Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* name category */}
                <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* suppliar test */}
                <div className="flex  gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Enter Coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* category deatails */}
                <div className="flex  gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Enter Coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Photo url */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="bg-orange-400 p-3 my-5 rounded-lg text-center">
                    <input type="submit" value="Add coffee" />
                </div>
            </form>
        </div>
    );
};

export default Addcoffee;