import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";
import CloudIcon from "@mui/icons-material/Cloud";

export default function getWeatherIcon (icon) {
  const iconProps = { sx: { fontSize: 40, color: "white" } };
  switch (icon) {
    case "clouds":
      return <CloudQueueIcon {...iconProps} />;
    case "broken-clouds":
      return <WbCloudyIcon {...iconProps} />;
    case "clear":
      return <AcUnitIcon {...iconProps} />;
    case "rain":
      return <GrainIcon {...iconProps} />;
    case "mist":
      return <CloudIcon {...iconProps} />;
    case "title":
      return <>⛅</>;
    default:
      return <CloudIcon {...iconProps} />;
  }
};