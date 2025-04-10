import React from "react";

const OrgCard = () => {
    return (
        <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-orange-200 rounded-full" />
            <p>Dog lovers <span className="text-blue-500">✔️</span></p>
        </div>
    );
};

export default OrgCard;