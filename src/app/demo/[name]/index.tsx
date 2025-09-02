import type { ReactElement, ReactNode } from "react";

// blocks
import { blank } from "@/app/demo/[name]/blocks/blank";
import { dashboard } from "@/app/demo/[name]/blocks/dashboard";
import { store } from "@/app/demo/[name]/blocks/store";
import { chatbot } from "@/app/demo/[name]/blocks/chatbot";

// components
import { brandHeader } from "@/app/demo/[name]/components/brand-header";
import { brandSidebar } from "@/app/demo/[name]/components/brand-sidebar";
import { hero } from "@/app/demo/[name]/components/hero";
import { login } from "@/app/demo/[name]/components/login";
import { logo } from "@/app/demo/[name]/components/logo";
import { productGrid } from "@/app/demo/[name]/components/product-grid";
import { promo } from "@/app/demo/[name]/components/promo";

// ui
import { accordion } from "@/app/demo/[name]/ui/accordion";
import { alert } from "@/app/demo/[name]/ui/alert";
import { avatar } from "@/app/demo/[name]/ui/avatar";
import { badge } from "@/app/demo/[name]/ui/badge";
import { breadcrumb } from "@/app/demo/[name]/ui/breadcrumb";
import { button } from "@/app/demo/[name]/ui/button";
import { calendar } from "@/app/demo/[name]/ui/calendar";
import { card } from "@/app/demo/[name]/ui/card";
import { carousel } from "@/app/demo/[name]/ui/carousel";
import { chart } from "@/app/demo/[name]/ui/chart";
import { checkbox } from "@/app/demo/[name]/ui/checkbox";
import { collapsible } from "@/app/demo/[name]/ui/collapsible";
import { dataTable } from "@/app/demo/[name]/ui/data-table";
import { datePicker } from "@/app/demo/[name]/ui/date-picker";
import { dialog } from "@/app/demo/[name]/ui/dialog";
import { dropdownMenu } from "@/app/demo/[name]/ui/dropdown-menu";
import { hoverCard } from "@/app/demo/[name]/ui/hover-card";
import { input } from "@/app/demo/[name]/ui/input";
import { menuBar } from "@/app/demo/[name]/ui/menu-bar";
import { scrollArea } from "@/app/demo/[name]/ui/scroll-area";
import { select } from "@/app/demo/[name]/ui/select";
import { separator } from "@/app/demo/[name]/ui/separator";
import { skeleton } from "@/app/demo/[name]/ui/skeleton";
import { slider } from "@/app/demo/[name]/ui/slider";
import { sonner } from "@/app/demo/[name]/ui/sonner";
import { switchComponent } from "@/app/demo/[name]/ui/switch";
import { table } from "@/app/demo/[name]/ui/table";
import { tabs } from "@/app/demo/[name]/ui/tabs";
import { toggleGroup } from "@/app/demo/[name]/ui/toggle-group";
import { tooltip } from "@/app/demo/[name]/ui/tooltip";

// ai-elements
import { actions } from "@/app/demo/[name]/components/actions";
import { branch } from "@/app/demo/[name]/components/branch";
import { codeBlock } from "@/app/demo/[name]/components/code-block";
import { conversation } from "@/app/demo/[name]/components/conversation";
import { image } from "@/app/demo/[name]/components/image";
import { inlineCitation } from "@/app/demo/[name]/components/inline-citation";
import { loader } from "@/app/demo/[name]/components/loader";
import { message } from "@/app/demo/[name]/components/message";
import { promptInput } from "@/app/demo/[name]/components/prompt-input";
import { reasoning } from "@/app/demo/[name]/components/reasoning";
import { response } from "@/app/demo/[name]/components/response";
import { sources } from "@/app/demo/[name]/components/sources";
import { suggestion } from "@/app/demo/[name]/components/suggestion";
import { task } from "@/app/demo/[name]/components/task";
import { tool } from "@/app/demo/[name]/components/tool";
import { webPreview } from "@/app/demo/[name]/components/web-preview";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  blank,
  store,
  dashboard,
  chatbot,

  // components
  hero,
  login,
  promo,
  logo,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,
  "product-grid": productGrid,

  // ui
  accordion,
  alert,
  avatar,
  badge,
  breadcrumb,
  button,
  calendar,
  card,
  carousel,
  chart,
  checkbox,
  collapsible,
  dialog,
  "date-picker": datePicker,
  "data-table": dataTable,
  "dropdown-menu": dropdownMenu,
  "hover-card": hoverCard,
  input,
  "menu-bar": menuBar,
  "scroll-area": scrollArea,
  select,
  separator,
  skeleton,
  slider,
  switch: switchComponent,
  sonner,
  table,
  tabs,
  "toggle-group": toggleGroup,
  tooltip,

  // ai-elements
  actions,
  branch,
  "code-block": codeBlock,
  conversation,
  image,
  "inline-citation": inlineCitation,
  loader,
  message,
  "prompt-input": promptInput,
  reasoning,
  response,
  sources,
  suggestion,
  task,
  tool,
  "web-preview": webPreview,
};
