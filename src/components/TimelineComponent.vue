<template>
  <div class="timeline-container">
    <ol class="timeline">
      <li class="timeline-item">
        <span class="timeline-item-icon | avatar-icon">
          <i class="avatar">
            <img src="https://assets.codepen.io/285131/hat-man.png" />
          </i>
        </span>
        <div class="new-comment">
          <input type="text" placeholder="Add a comment..." />
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="https://assets.codepen.io/285131/winking-girl.png" />
          </i>
          <span
            ><a href="#">Luna Bonifacio</a> has changed
            <a href="#">2 attributes</a> on
            <time datetime="21-01-2021">Jan 21, 2021</time></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/crf.svg" alt="crf" />
          </i>
          <span
            ><a href="#">Luna Bonifacio</a> has changed
            <a href="#">2 attributes</a> on
            <time datetime="21-01-2021">Jan 21, 2021</time></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.09155 6.63659L9.78267 3.49965C11.2037 2.83345 12.7961 2.83345 14.2171 3.49965L20.9083 6.63664C22.3638 7.31899 22.3638 9.68105 20.9083 10.3634L14.2172 13.5003C12.7962 14.1665 11.2038 14.1665 9.78275 13.5003L4.99995 11.2581"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2.5 15V12.1376C2.5 10.8584 2.5 10.2188 2.83032 9.71781C3.16064 9.21687 3.74853 8.96492 4.92432 8.461L6 8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/occitanie.svg" alt="occitanie" />
          </i>
          <span
            ><a href="#">Antoine</a> a réussi un
            <a href="#">Baccalauréat Scientifique</a> avec mention bien au
            <a href="#">Lycée Jean Jaurès</a> en
            <time datetime="20-01-2021">Juin, 2021</time></span
          >
        </div>
      </li>
      <li class="timeline-item | extra-space">
        <span class="timeline-item-icon | filled-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
            />
          </svg>
        </span>
        <div class="timeline-item-wrapper">
          <div class="timeline-item-description">
            <i class="avatar | small">
              <img src="https://assets.codepen.io/285131/hat-man.png" />
            </i>
            <span
              ><a href="#">Yoan Almedia</a> commented on
              <time datetime="20-01-2021">Jan 20, 2021</time></span
            >
          </div>
          <div class="comment">
            <p>
              I've sent him the assignment we discussed recently, he is coming
              back to us this week. Regarding to our last call, I really enjoyed
              talking to him and so far he has the profile we are looking for.
              Can't wait to see his technical test, I'll keep you posted and
              we'll debrief it all together!😊
            </p>
            <button class="button">👏 2</button>
            <button class="button | square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 12a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7z"
                />
              </svg>
            </button>
          </div>
          <button class="show-replies">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-forward"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
            </svg>
            Show 3 replies
            <span class="avatar-list">
              <i class="avatar | small">
                <img src="https://assets.codepen.io/285131/hat-man.png" />
              </i>
              <i class="avatar | small">
                <img src="https://assets.codepen.io/285131/winking-girl.png" />
              </i>
              <i class="avatar | small">
                <img src="https://assets.codepen.io/285131/smiling-girl.png" />
              </i>
            </span>
          </button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

*,
*:before,
*:after {
  box-sizing: border-box;
}

:root {
  --c-grey-100: #f4f6f8;
  --c-grey-200: #e3e3e3;
  --c-grey-300: #b2b2b2;
  --c-grey-400: #7b7b7b;
  --c-grey-500: #3d3d3d;
  --c-blue-500: #688afd;
}

/* Some basic CSS overrides */
body {
  line-height: 1.5;
  min-height: 100vh;
  font-family: "Outfit", sans-serif;
  padding-top: 20vh;
  padding-bottom: 20vh;
}

button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.timeline-container {
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 60%;
}

.timeline {
  width: 85%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 0 32px 32px;
  border-left: 2px solid #e3e3e3;
  font-size: 1.125rem;
}

.timeline-item {
  display: flex;
  gap: 24px;
}

.timeline-item + * {
  margin-top: 24px;
}

.timeline-item + .extra-space {
  margin-top: 48px;
}

.new-comment {
  width: 100%;
}

.new-comment input {
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  height: 48px;
  padding: 0 16px;
  width: 100%;
}

.new-comment input::placeholder {
  color: #b2b2b2;
}

.new-comment input:focus {
  border-color: #b2b2b2;
  outline: 0;
  box-shadow: 0 0 0 4px #f4f6f8;
}

.timeline-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: -52px;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 0 0 6px #fff;
}

.timeline-item-icon svg {
  width: 20px;
  height: 20px;
}

.timeline-item-icon.faded-icon {
  background-color: #f4f6f8;
  color: #7b7b7b;
}

.timeline-item-icon.filled-icon {
  background-color: #688afd;
  color: #fff;
}

.timeline-item-description {
  display: flex;
  padding-top: 6px;
  gap: 8px;
  color: #7b7b7b;
}

.timeline-item-description img {
  flex-shrink: 0;
}

.timeline-item-description a {
  color: #3d3d3d;
  font-weight: 500;
  text-decoration: none;
  font-weight: bold;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.avatar.small {
  width: 28px;
  height: 28px;
}

.avatar img {
  object-fit: cover;
}

.comment {
  margin-top: 12px;
  color: #3d3d3d;
  border: 1px solid #e3e3e3;
  box-shadow: 0 4px 4px 0 #f4f6f8;
  border-radius: 6px;
  padding: 16px;
  font-size: 1rem;
}

.button {
  border: 0;
  padding: 0;
  display: inline-flex;
  vertical-align: middle;
  margin-right: 4px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: 32px;
  padding: 0 8px;
  background-color: #f4f6f8;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 99em;
}

.button:hover {
  background-color: #e3e3e3;
}

.button.square {
  border-radius: 50%;
  color: #7b7b7b;
  width: 32px;
  height: 32px;
  padding: 0;
}

.button.square svg {
  width: 24px;
  height: 24px;
}

.button.square:hover {
  background-color: #e3e3e3;
  color: #3d3d3d;
}

.show-replies {
  color: #b2b2b2;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  cursor: pointer;
}

.show-replies svg {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.show-replies:hover,
.show-replies:focus {
  color: #3d3d3d;
}

.avatar-list {
  display: flex;
  align-items: center;
}

.avatar-list > * {
  position: relative;
  box-shadow: 0 0 0 2px #fff;
  margin-right: -8px;
}
</style>
