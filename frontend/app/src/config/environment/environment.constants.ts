import { parseEnvVariable } from "@/utils/utils";

const environment = {
    backendUrl: parseEnvVariable(process.env.UNIOWN_BACKEND_URL)
};

export default environment;
