import { Card, CardHeader, CardBody } from "@nextui-org/card";

interface IAssetCardProps {
    username: string;
}

const AssetCard = ({ username }: IAssetCardProps) => {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{username}</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">ZALUPA</CardBody>
        </Card>
    );
};

export default AssetCard;
