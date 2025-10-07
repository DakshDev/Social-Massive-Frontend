import SelectOptionUI from "@/components/other/selectOptionUI";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function UserInfoEditForm() {
  return (
    <form className="max-w-6xl">
      <Input type="text" maxLength={30} alt="name" name="name" placeholder="Old Name" />
      <Textarea
        className="resize-none h-40"
        maxLength={500}
        name="bio"
        placeholder="Old Bio"
      ></Textarea>
      <Input
        type="text"
        maxLength={100}
        alt="website"
        name="website"
        placeholder="Old Website URL"
      />
      <SelectOptionUI
        name="gender"
        options={["male", "female", "other"]}
        placeholder="Select Gender"
      />
    </form>
  );
}
