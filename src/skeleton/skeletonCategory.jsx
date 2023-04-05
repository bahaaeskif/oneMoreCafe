import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonCategory({ darkMode }) {
    return (
        <div className=''>
            <Skeleton width={150} height={40} />
        </div>
    );
}

export default SkeletonCategory;