const getShortAddress = (account: string | undefined): string => `${account?.slice(0, 4)}...${account?.slice(account?.length - 4)}`;

export default getShortAddress;
