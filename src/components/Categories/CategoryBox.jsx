import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'

// eslint-disable-next-line react/prop-types
const CategoryBox = ({ label, icon: Icon, selected }) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString());
            const updatedQuery = { ...currentQuery, category: label };
            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            })
            navigate(url)
        }
    }

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col items-center justify-center gap-2 py-3 border-b-2 hover:text-[#7469B6] transition cursor-pointer pr-[9px] md:pr-14
            ${selected ? 'border-b-[#7469B6] text-[#7469B6]' : 'border-transparent text-neutral-500'}`}>
            <Icon size={26} />
            <p className="text-sm font-medium">{label}</p>
        </div>
    );
};

export default CategoryBox;