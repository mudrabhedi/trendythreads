import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCartStore();

	return (
		<div className='rounded-lg border p-4 shadow-sm border-[#FED7C3] bg-[#FEE2E2] md:p-6'>
			<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
				<div className='shrink-0 md:order-1'>
					<img className='h-20 md:h-32 rounded object-cover' src={item.image} />
				</div>
				<label className='sr-only'>Choose quantity:</label>

				<div className='flex items-center justify-between md:order-3 md:justify-end'>
					<div className='flex items-center gap-2'>
						<button
							className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
							 border-[#E09AAE] bg-[#FED7C3] hover:bg-[#FDD4DA] focus:outline-none focus:ring-2
							  focus:ring-[#E09AAE]'
							onClick={() => updateQuantity(item._id, item.quantity - 1)}
						>
							<Minus className='text-[#4B0F1F]' />
						</button>
						<p className='text-[#4B0F1F]'>{item.quantity}</p>
						<button
							className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
							 border-[#E09AAE] bg-[#FED7C3] hover:bg-[#FDD4DA] focus:outline-none 
						focus:ring-2 focus:ring-[#E09AAE]'
							onClick={() => updateQuantity(item._id, item.quantity + 1)}
						>
							<Plus className='text-[#4B0F1F]' />
						</button>
					</div>

					<div className='text-end md:order-4 md:w-32'>
						<p className='text-base font-bold text-[#E09AAE]'>${item.price}</p>
					</div>
				</div>

				<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
					<p className='text-base font-medium text-[#4B0F1F] hover:text-[#E09AAE] hover:underline'>
						{item.name}
					</p>
					<p className='text-sm text-[#D28A98]'>{item.description}</p>

					<div className='flex items-center gap-4'>
						<button
							className='inline-flex items-center text-sm font-medium text-[#FF6F61]
							 hover:text-[#E65C50] hover:underline'
							onClick={() => removeFromCart(item._id)}
						>
							<Trash />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CartItem;
