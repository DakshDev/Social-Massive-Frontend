import MenuLinks from "./menu_links";

function Menu() {
  return (
    <nav className="p-2 bg-sidebar border border-bg-sidebar-border w-80">
      <h1 className="text-2xl font-semibold mb-5 p-4">Post Massive</h1>
      <MenuLinks />
    </nav>
  );
}

export default Menu;
