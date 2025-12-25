import { ui } from "@adamjanicki/ui";
import Link from "src/components/Link";
import Page from "src/components/Page";
import series25 from "src/img/series25-2.webp";

export default function About() {
  return (
    <Page title="About">
      <Link to="/lego/camera">Go to the Lego Scanner</Link>
      <ui.img
        src={series25}
        alt=""
        vfx={{ radius: "rounded", marginTop: "s" }}
      />
      <ui.p className="w-70-90" style={{ lineHeight: 1.6 }}>
        Recently, Lego decided to switch from using plastic packaging to
        cardboard in their collectible minifigure series. What does this mean?
        It means that gifted feelers like myself can no longer identify which
        figures lie inside each package like we used to. But fans have
        discovered that new boxed-packages include a QR code that can be
        uniquely mapped to a figure, meaning we can once again beat the system
        and identify which figure lies in a given mystery box.{" "}
        <ui.em>
          (And in fact, I just learned that these codes aren't even QR codes at
          all, they're actually a special variant of code called a data matrix,
          but I'll probably keep referring to them as QR codes to keep it
          simple).
        </ui.em>{" "}
        So I decided to extend this QR scanner site to be able to scan a QR
        code, and tell you which minifigure lies inside the box. This will only
        work for series 25 currently, but will hopefully be able to extend to
        series to come in the future.
      </ui.p>
    </Page>
  );
}
