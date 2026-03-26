import { convert, convertCurrencyLive } from '@mahounou/uconv';

convert("10km", "m");      // 10000
convert("5lbs", "kg");     // 2.26796
convert("1hr", "min");     // 60
convert("100USD", "EUR");  // static rate

await convertCurrencyLive(100, "USD", "EUR"); // real-time rate