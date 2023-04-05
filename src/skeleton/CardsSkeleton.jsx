import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardsSkeleton() {
    const count = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {count.map(() => {
                return <div className=" px-3 pb-2">
                    <Skeleton height={140} className='mb-2' />
                    <Skeleton height={20} width={140} className='mb-2' />
                    <Skeleton height={15} width={100} />
                    <Skeleton height={15} width={70} />
                </div>
            })}
        </>
    );
}

export default CardsSkeleton;