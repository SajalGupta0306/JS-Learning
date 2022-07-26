import { useState } from "react";

const Component = ({ data }) => {
    const [expand, setExpand] = useState(false);
    let comp;
    if (data.children && data.children.length) {
        comp = (
            <>
                <span style={{ cursor: "pointer" }} onClick={() => setExpand(!expand)}>
                    {data.name}
                </span>
                {expand &&
                    data.children.map((item, i) => {
                        return <Component key={i} data={item}></Component>;
                    })}
            </>
        );
    } else {
        comp = <span>{data.name}</span>;
    }
    return <div style={{ textAlign: "left", marginLeft: "10px" }}>{comp}</div>;
};

export default Component;
