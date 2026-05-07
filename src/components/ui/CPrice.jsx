import { useCurrency } from "../../i18n";
import { cvt } from "../../utils/currency";

function CPrice({ myr, style }) {

    const cur = useCurrency();
    if (myr == null) return null;
    return (<span style={style}>{cur.symbol} {cvt(myr, cur)}</span>);
}

export default CPrice