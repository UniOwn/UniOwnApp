const getLikeColor = (isFeatured?: boolean, isLiked?: boolean): string => {
    if (isFeatured) {
        return isLiked ? "#43C7FF" : "#185AD8";
    } else {
        return isLiked ? "#797979" : "#141414";
    }
};

export default getLikeColor;
