import SocialButton from "./SocialButton";
import GitHubIcon from "./icons/GitHubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function SocialBar({ title }: { title?: string | null }) {
  function handleSocialClick(url: string) {
    window.open(url, "_blank");
  }

  return (
    <>
      {title ? <h2 className="text-xl font-semibold mb-3">{title}</h2> : null}
      <div className="flex gap-5">
        <SocialButton
          icon={<GitHubIcon />}
          onClick={() => handleSocialClick("https://github.com/imjxlian/")}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-semibold text-neutral-900 dark:text-white rounded-full group bg-gradient-to-r from-rose-500 to-amber-500 group-hover:from-rose-500 group-hover:to-amber-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none bg-transparent"
        />
        <SocialButton
          icon={<LinkedInIcon />}
          onClick={() =>
            handleSocialClick("https://www.linkedin.com/in/julianforme/")
          }
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-semibold text-neutral-900 dark:text-white rounded-full group bg-gradient-to-r from-amber-500 to-emerald-500 group-hover:from-rose-500 group-hover:to-amber-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none bg-transparent"
        />
        <SocialButton
          icon={<InstagramIcon />}
          onClick={() =>
            handleSocialClick("https://www.instagram.com/7jxlian7/")
          }
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-semibold text-neutral-900 dark:text-white rounded-full group bg-gradient-to-r from-emerald-500 to-indigo-500 group-hover:from-rose-500 group-hover:to-amber-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none bg-transparent"
        />
      </div>
    </>
  );
}
